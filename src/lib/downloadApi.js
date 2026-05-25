/**
 * 获取直链下载 URL（服务端会 302 跳转到最新 DMG）
 * @param {"zh"|"en"} locale
 * @returns {string}
 */
export function getDirectDownloadUrl(locale) {
  return locale === "zh"
    ? "https://api-cn-gamehub.xiaoji.com/game/download/mac/zh-cn"
    : "https://api-international-gamehub.xiaoji.com/game/download/mac/en"
}

/**
 * 获取最新版本信息
 * @param {"zh"|"en"} locale
 * @param {string} type 包类型，如 "mac"
 * @returns {Promise<{ downloadUrl: string, version: string, fileSize: number, updatedAt: number, arch: string }>}
 */
export async function fetchLatestVersion(locale, type = "mac-installer") {
  const base =
    locale === "zh"
      ? import.meta.env.PUBLIC_API_DOMAIN_CN
      : import.meta.env.PUBLIC_API_DOMAIN_INTL
  const langId = locale === "zh" ? 2 : 1
  const url = `${base}/game/v1/public/upgrade/latest?type=${encodeURIComponent(type)}&lang_id=${langId}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`请求失败: ${res.status}`)
  }
  const json = await res.json()
  if (!Array.isArray(json.data) || json.data.length === 0) {
    throw new Error(json.message || "未获取到版本信息")
  }
  const item = json.data[0]
  return {
    downloadUrl: item.download_url,
    version: item.version,
    fileSize: item.file_size,
    updatedAt: item.updated_at,
    arch: item.arch,
  }
}
