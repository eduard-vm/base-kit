import { BASE_URL } from './config'

export async function getUsersList <T>(): Promise<T[]> {
  const res = await fetch(`${BASE_URL}/users`).then(r => r.json())

  return res
}

export async function getUser <T>(id: number): Promise<T> {
  const res = await fetch(`${BASE_URL}/users/${id}`).then(r => r.json())

  return res
}
