import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ message: 'ID is required' }, { status: 400 })
  }

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()

    if (res.ok) {
      return NextResponse.json({ data })
    } else {
      return NextResponse.json({ message: 'Post not found' }, { status: 404 })
    }
  } catch (error:any) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}