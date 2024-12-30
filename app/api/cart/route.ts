import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();



export async function POST(req: NextRequest) {
  try {
    const { userId, productId, quantity } = await req.json();
    console.log('Received:', { userId, productId, quantity });

    // Type validation
    const parsedUserId = parseInt(userId, 10);
    const parsedProductId = parseInt(productId, 10);

    if (isNaN(parsedUserId) || isNaN(parsedProductId) || quantity <= 0) {
      console.error('Invalid input types:', { userId, productId, quantity });
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    console.log('Parsed IDs:', { parsedUserId, parsedProductId });

    const existingCartItem = await prisma.cart.findFirst({
      where: { userId: parsedUserId, productId: parsedProductId },
    });

    console.log('Existing cart item:', existingCartItem);

    if (existingCartItem) {
      // Update quantity if the item exists
      const updatedCartItem = await prisma.cart.update({
        where: { id: existingCartItem.id },
        data: { quantity: existingCartItem.quantity + quantity },
      });
      console.log('Updated cart item:', updatedCartItem);
      return NextResponse.json(updatedCartItem);
    } else {
      // Add a new cart item
      const newCartItem = await prisma.cart.create({
        data: { userId: parsedUserId, productId: parsedProductId, quantity },
      });
      return NextResponse.json(newCartItem);
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    } else {
      console.error('Unknown error type:', JSON.stringify(error, null, 2));
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
    try {
      const { searchParams } = new URL(req.url);
      const userId = searchParams.get('userId');
  
      if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
      }
  
      const cartItems = await prisma.cart.findMany({
        where: { userId: parseInt(userId, 10) },
        include: { product: true }, // Include product details
      });
  
      return NextResponse.json(cartItems);
    } catch (error) {
      console.error('Error fetching cart:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }
  

  export async function PATCH(req: NextRequest) {
    try {
      const { cartItemId, quantity } = await req.json();
  
      if (!cartItemId || quantity <= 0) {
        return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
      }
  
      const updatedCartItem = await prisma.cart.update({
        where: { id: cartItemId },
        data: { quantity },
      });
  
      return NextResponse.json(updatedCartItem);
    } catch (error) {
      console.error('Error updating cart item:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }
  


  export async function DELETE(req: NextRequest) {
    try {
      const { cartItemId } = await req.json();
  
      if (!cartItemId) {
        return NextResponse.json({ error: 'Cart item ID is required' }, { status: 400 });
      }
  
      await prisma.cart.delete({
        where: { id: cartItemId },
      });
  
      return NextResponse.json({ message: 'Item removed from cart' });
    } catch (error) {
      console.error('Error removing cart item:', error);
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
  }
  