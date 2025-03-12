

export function numberToText(num: number) {
  if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, "") + "B"
  if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M"
  if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "K"
  return num.toString()
}


export const fetchData = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, options)
  return await res.json()
}
