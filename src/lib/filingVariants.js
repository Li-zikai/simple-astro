export const filingVariantAttribute = "data-filing-variant"
export const defaultFilingVariant = "default"
export const gamemacCnFilingVariant = "gamemac-cn"
export const gamemacCnHosts = ["gamemac.cn", "www.gamemac.cn"]

const filingLabelOverrides = {
  icp: {
    [gamemacCnFilingVariant]: "ICP备案号: 粤ICP备10217906号-26",
  },
  gongan: {
    [gamemacCnFilingVariant]: "公安备案号：粤公网安备44010602015450号",
  },
}

export function getFilingLabelVariants(linkKey, defaultLabel) {
  const overrides = filingLabelOverrides[linkKey]

  if (!overrides) {
    return [{ variant: defaultFilingVariant, label: defaultLabel }]
  }

  return [
    { variant: defaultFilingVariant, label: defaultLabel },
    ...Object.entries(overrides).map(([variant, label]) => ({ variant, label })),
  ]
}
