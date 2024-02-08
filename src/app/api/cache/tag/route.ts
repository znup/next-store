import { env } from 'app/config/env';
import { revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const body = await request.json();
  const { tag, token } = body;

  if (!tag || !token) {
    return Response.json({ error: 'Falta el tag o token' }, { status: 400 });
  }

  if (token !== env.CACHE_TOKEN) {
    return Response.json({ error: 'Token incorrecto' }, { status: 401 });
  }

  revalidateTag(tag);

  return Response.json({ success: true });
}
