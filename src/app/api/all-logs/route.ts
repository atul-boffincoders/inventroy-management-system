import connectDb from '@/app/config/db';
import LogModel from '@/app/models/log';
import { StatusCodes } from 'http-status-codes';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connectDb();
        const data = await LogModel.find({}).populate('productId');

        const response = NextResponse.json({
          success: true,
          status: StatusCodes.OK,
          data,
      });

      // Set Cache-Control header to prevent caching
      response.headers.set('Cache-Control', 'no-store');

      return response;    } catch (error) {
      
        return NextResponse.json({
            success: false,
            message: 'Failed to create item',
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        });
    }
}
