import { useState, useEffect } from "react"
import {
  AppleIcon,
  BrandIcon,
  BrandTextIcon,
  ModalCloseIcon,
  ModalCommunityIcon,
  ModalFeatureCheckIcon,
  ModalFeatureChipIcon,
  ModalFeatureGamepadIcon,
} from "@/components/app/icons"
import { useI18n } from "@/i18n/context"
import { fetchLatestVersion } from "@/lib/downloadApi"

function formatFileSize(bytes) {
  if (!bytes) return null
  const mb = bytes / 1024 / 1024
  return mb >= 1 ? `${mb.toFixed(1)} MB` : `${(bytes / 1024).toFixed(1)} KB`
}

function formatDate(timestamp) {
  if (!timestamp) return null
  const d = new Date(timestamp * 1000)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

export function DownloadModal({ onClose }) {
  const { t, locale } = useI18n()
  const dm = t.downloadModal
  const communityUrl = t.communityUrl

  const [versionInfo, setVersionInfo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState(false)

  useEffect(() => {
    setLoading(true)
    setFetchError(false)
    fetchLatestVersion(locale)
      .then((info) => {
        setVersionInfo(info)
      })
      .catch(() => {
        setFetchError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [locale])

  const downloadUrl = versionInfo?.downloadUrl || null
  const displayVersion = versionInfo?.version ? `v${versionInfo.version}` : "Beta 0.1.0"
  const displayFileSize = versionInfo?.fileSize ? formatFileSize(versionInfo.fileSize) : dm.fileSizeValue
  const displayDate = versionInfo?.updatedAt ? formatDate(versionInfo.updatedAt) : dm.updateDateValue

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label={dm.closeLabel}>
          <ModalCloseIcon />
        </button>

        <div className="modal-header">
          <div className="modal-brand">
            <BrandIcon />
            <BrandTextIcon locale={locale} />
          </div>
          <p className="modal-tagline">{dm.tagline}</p>
        </div>

        <div className="modal-version-badge">
          <span className="modal-version-dot" />
          {dm.versionBadge}
        </div>

        <div className="modal-main-action">
          {loading ? (
            <button className="modal-download-btn modal-download-btn--loading" disabled>
              <AppleIcon />
              <span>{dm.downloadBtn}</span>
            </button>
          ) : fetchError || !downloadUrl ? (
            <button className="modal-download-btn modal-download-btn--error" disabled>
              <AppleIcon />
              <span>{dm.fetchError}</span>
            </button>
          ) : (
            <a
              href={downloadUrl}
              className="modal-download-btn"
              download
            >
              <AppleIcon />
              <span>{dm.downloadBtn}</span>
            </a>
          )}
          <p className="modal-system-req">{dm.systemReq}</p>
        </div>

        <div className="modal-divider" />

        <div className="modal-info-grid">
          <div className="modal-info-item">
            <span className="modal-info-label">{dm.versionLabel}</span>
            <span className="modal-info-value">{displayVersion}</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">{dm.fileSizeLabel}</span>
            <span className="modal-info-value">{displayFileSize}</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">{dm.updateDateLabel}</span>
            <span className="modal-info-value">{displayDate}</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">{dm.systemReqLabel}</span>
            <span className="modal-info-value">macOS 13 Ventura+</span>
          </div>
        </div>

        <div className="modal-divider" />

        <div className="modal-community">
          <p className="modal-community-title">{dm.communityTitle}</p>
          <p className="modal-community-desc">
            {dm.communityDesc}
          </p>
          <a href={communityUrl} target="_blank" rel="noopener noreferrer" className="modal-community-btn">
            <ModalCommunityIcon />
            {dm.communityBtn}
          </a>
        </div>

        <div className="modal-features">
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureCheckIcon />
            </div>
            <div>
              <p className="modal-feature-title">{dm.featureGames}</p>
              <p className="modal-feature-desc">{dm.featureGamesDesc}</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureChipIcon />
            </div>
            <div>
              <p className="modal-feature-title">{dm.featureSilicon}</p>
              <p className="modal-feature-desc">{dm.featureSiliconDesc}</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <ModalFeatureGamepadIcon />
            </div>
            <div>
              <p className="modal-feature-title">{dm.featureGamepad}</p>
              <p className="modal-feature-desc">{dm.featureGamepadDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
