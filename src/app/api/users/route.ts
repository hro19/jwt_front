import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASIC_URL}/users`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return NextResponse.json(data);
}
