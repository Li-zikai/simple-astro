import { InfoIcon } from "@/components/app/icons"
import { UserLevelBadgeSvg } from "@/components/app/AppPageSectionSvgs"
import { useI18n } from "@/i18n/context"

function localizeCurrency(value, locale) {
  if (locale !== "zh" && value.startsWith("¥")) {
    return "$" + value.slice(1)
  }
  return value
}

export function UserPopupCard({ user }) {
  const { t, locale } = useI18n()

  const getLevelColor = (level) => {
    const levelNum = parseInt(level);
    if (levelNum === 461) return "#8659AE";
    if (levelNum === 251) return "#5F91C4";
    if (levelNum === 213) return "#C45F5F";
    if (levelNum === 177) return "#8659AE";
    if (levelNum === 159) return "#5F91C4";
    if (levelNum === 152) return "#5F91C4";
    if (levelNum === 131) return "#C4C45F";
    if (levelNum === 50) return "#5F91C4";
    if (levelNum === 23) return "#BF654A";
    if (levelNum === 10) return "#711E30";
    
    if (levelNum < 100) return "#BF654A";
    if (levelNum < 200) return "#5F91C4";
    if (levelNum < 300) return "#8659AE";
    return "#8659AE";
  };

  const levelColor = getLevelColor(user.level);

  return (
    <div className="user-popup">
      <div className="user-popup-top">
        <div className="user-info">
          <div className="user-avatar">
            <img src={user.avatar} alt="avatar" />
          </div>
          <div className="user-details">
            <span className="user-name">{user.name}</span>
            <span className="user-signature">{t.userData.signature}</span>
          </div>
        </div>
        <div className="user-level-badge">
          <UserLevelBadgeSvg level={user.level} color={levelColor} />
          <span>{user.level}</span>
        </div>
      </div>
      <div className="user-stats-bar">
        <div className="user-stat-item">
          <span className="user-stat-value">{localizeCurrency(user.value, locale)}</span>
          <span className="user-stat-label">
            {t.userCard.accountValue}
            <InfoIcon />
          </span>
        </div>
        <div className="user-stat-item">
          <span className="user-stat-value">{user.games}</span>
          <span className="user-stat-label">{t.userCard.gameCount}</span>
        </div>
        <div className="user-stat-item">
          <span className="user-stat-value">{user.hours}</span>
          <span className="user-stat-label">{t.userCard.playTime}</span>
        </div>
      </div>
    </div>
  )
}
