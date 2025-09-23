import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get('name');
    const description = formData.get('description') || '';
    const price = parseFloat(formData.get('price'));
    const imageFile = formData.get('image');

    const product = await prisma.product.create({
      data: { name, description, price },
    });

    let imageUrl = null;

    if (imageFile && imageFile.size > 0) {
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir);
      }

      const extension = imageFile.name.split('.').pop(); 
      const fileName = `${product.id}.${extension}`;
      const filePath = path.join(uploadsDir, fileName);

      const arrayBuffer = await imageFile.arrayBuffer();
      fs.writeFileSync(filePath, Buffer.from(arrayBuffer));

      imageUrl = `/uploads/${fileName}`;

      await prisma.product.update({
        where: { id: product.id },
        data: { image: imageUrl },
      });
    }

    const productWithImage = { ...product, image: imageUrl };

    return new Response(JSON.stringify({ message: 'Product added', product: productWithImage }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
