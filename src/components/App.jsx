import { useState, useEffect, useRef } from "react"
import { RainbowButton } from "@/registry/magicui/rainbow-button"
import { ShowcaseSparkles } from "@/components/ShowcaseSparkles"
import { CometCard } from "@/components/ui/comet-card"
import { Marquee } from "@/registry/magicui/marquee"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"

function usePageZoom() {
  const appRef = useRef(null)
  useEffect(() => {
    const handleResize = () => {
      if (!appRef.current) return
      appRef.current.style.zoom = "1"
      const vw = document.documentElement.clientWidth
      const zoom = Math.min(1, vw / 1440)
      appRef.current.style.zoom = zoom
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return appRef
}

const userData = [
  { name: "Jenny", signature: "个人签名", level: "23", value: "¥2203.0", games: "49", hours: "253h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jenny" },
  { name: "Jone", signature: "个人签名", level: "10", value: "¥13915.1", games: "227", hours: "984h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jone" },
  { name: "Jilly", signature: "个人签名", level: "10", value: "¥376555.1", games: "3413", hours: "2661h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jilly" },
  { name: "Jack", signature: "个人签名", level: "10", value: "¥1916", games: "172", hours: "399h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" },
  { name: "Jane", signature: "个人签名", level: "10", value: "¥18.9", games: "1", hours: "97h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" },
  { name: "James", signature: "个人签名", level: "10", value: "¥5420", games: "88", hours: "120h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
  { name: "Alice", signature: "个人签名", level: "15", value: "¥890.0", games: "32", hours: "150h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" },
  { name: "Bob", signature: "个人签名", level: "12", value: "¥2500.5", games: "110", hours: "420h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" },
  { name: "Charlie", signature: "个人签名", level: "8", value: "¥120.0", games: "5", hours: "20h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" },
  { name: "David", signature: "个人签名", level: "20", value: "¥15600", games: "450", hours: "1200h", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David" },
]

const firstRow = userData.slice(0, 5);
const secondRow = userData.slice(5, 10);

const gameCovers = [
  { id: 1, name: "黑神话：悟空", designation: "动作RPG", image: "/Rectangle 1161.png" },
  { id: 2, name: "艾尔登法环", designation: "开放世界RPG", image: "/Rectangle 1163.png" },
  { id: 3, name: "博德之门3", designation: "角色扮演", image: "/Rectangle 1165.png" },
  { id: 4, name: "赛博朋克2077", designation: "动作冒险", image: "/Rectangle 1167.png" },
  { id: 5, name: "只狼", designation: "动作冒险", image: "/Rectangle 1169.png" },
  { id: 6, name: "战神：诸神黄昏", designation: "动作冒险", image: "/Rectangle 1171.png" },
];

const UserPopupCard = ({ user }) => (
  <div className="user-popup">
    <div className="user-popup-top">
      <div className="user-info">
        <div className="user-avatar">
          <img src={user.avatar} alt="avatar" />
        </div>
        <div className="user-details">
          <span className="user-name">{user.name}</span>
          <span className="user-signature">{user.signature}</span>
        </div>
      </div>
      <div className="user-level-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="24" stroke="#BF654A" strokeWidth="2" />
        </svg>
        <span>{user.level}</span>
      </div>
    </div>
    <div className="user-stats-bar">
      <div className="user-stat-item">
        <span className="user-stat-value">{user.value}</span>
        <span className="user-stat-label">
          账号价值
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.33331 10.6666V7.99992C7.33331 7.63173 7.63179 7.33325 7.99998 7.33325C8.36817 7.33325 8.66665 7.63173 8.66665 7.99992V10.6666C8.66665 11.0348 8.36817 11.3333 7.99998 11.3333C7.63179 11.3333 7.33331 11.0348 7.33331 10.6666Z" fill="#BAD7F5" fillOpacity="0.65" />
            <path d="M7.99998 4.33325C8.55227 4.33325 8.99998 4.78097 8.99998 5.33325C8.99996 5.88552 8.55225 6.33325 7.99998 6.33325C7.44771 6.33325 7 5.88552 6.99998 5.33325C6.99998 4.78097 7.44769 4.33325 7.99998 4.33325Z" fill="#BAD7F5" fillOpacity="0.65" />
            <path fillRule="evenodd" clipRule="evenodd" d="M7.99998 1.33325C11.6818 1.33325 14.6666 4.31802 14.6666 7.99992C14.6666 11.6818 11.6818 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6818 1.33331 7.99992C1.33331 4.31802 4.31808 1.33325 7.99998 1.33325ZM7.99998 2.66659C5.05446 2.66659 2.66665 5.0544 2.66665 7.99992C2.66665 10.9455 5.05446 13.3333 7.99998 13.3333C10.9455 13.3333 13.3333 10.9455 13.3333 7.99992C13.3333 5.0544 10.9455 2.66659 7.99998 2.66659Z" fill="#BAD7F5" fillOpacity="0.65" />
          </svg>
        </span>
      </div>
      <div className="user-stat-item">
        <span className="user-stat-value">{user.games}</span>
        <span className="user-stat-label">游戏数量</span>
      </div>
      <div className="user-stat-item">
        <span className="user-stat-value">{user.hours}</span>
        <span className="user-stat-label">游戏时长</span>
      </div>
    </div>
  </div>
)

function BrandIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1028 2.8266C18.904 -1.15454 26.1938 0.800874 28.3635 6.65195L29.0946 8.62316C29.1522 8.77852 29.2594 8.91055 29.3994 8.99898L31.1429 10.1004C36.4299 13.4404 36.8243 21.013 31.9129 24.8854L30.3113 26.1479C30.181 26.2506 30.0883 26.3936 30.0473 26.5546L29.5381 28.5553C27.9974 34.61 20.9432 37.3245 15.7487 33.8615L14.0007 32.6964C13.8632 32.6048 13.6995 32.5607 13.5347 32.5712L11.439 32.7055C5.21096 33.1042 0.457622 27.2221 2.14715 21.2073L2.70548 19.22C2.7504 19.06 2.74108 18.8895 2.6795 18.7352L1.92347 16.8402C-0.396038 11.0281 3.72726 4.66751 9.97399 4.42164L12.0342 4.34078C12.1995 4.33424 12.358 4.2734 12.4854 4.16781L14.1028 2.8266ZM26.4592 8.5982C24.6823 3.80629 18.7122 2.20463 14.7802 5.46508L13.4557 6.56336C13.3513 6.64993 13.2214 6.69971 13.0859 6.70504L11.399 6.77148C6.2831 6.97281 2.9062 12.1819 4.80572 16.9418L5.42516 18.494C5.47557 18.6204 5.48267 18.7599 5.44588 18.8909L4.98867 20.5186C3.60509 25.4444 7.49804 30.2617 12.5985 29.9352L14.3149 29.8252C14.4499 29.8166 14.584 29.8525 14.6966 29.9275L16.1279 30.882C20.3821 33.718 26.1592 31.4949 27.421 26.5363L27.8382 24.8977C27.8717 24.7659 27.9477 24.6486 28.0545 24.5644L29.366 23.5305C33.3882 20.3591 33.0652 14.1576 28.7354 11.4223L27.3076 10.5202C27.1929 10.4478 27.1051 10.3398 27.0579 10.2126L26.4592 8.5982Z"
        fill="white"
      />
      <ellipse cx="20.3678" cy="18.2518" rx="2.01164" ry="2.01399" fill="white" />
      <ellipse cx="26.4028" cy="18.2518" rx="2.01164" ry="2.01399" fill="white" />
      <path
        d="M12.3631 15.2309C12.3631 14.9528 12.138 14.7274 11.8602 14.7274H10.5191C10.2414 14.7274 10.0162 14.9528 10.0162 15.2309V16.5735C10.0162 16.8515 9.79105 17.077 9.5133 17.077L8.17228 17.077C7.89453 17.077 7.66937 17.3024 7.66937 17.5805V18.9231C7.66937 19.2012 7.89453 19.4266 8.17228 19.4266H9.5133C9.79105 19.4266 10.0162 19.652 10.0162 19.9301V21.2728C10.0162 21.5509 10.2414 21.7763 10.5191 21.7763H11.8602C12.138 21.7763 12.3631 21.5509 12.3631 21.2728V19.9301C12.3631 19.652 12.5883 19.4266 12.866 19.4266H14.2072C14.4849 19.4266 14.7101 19.2012 14.7101 18.9231V17.5805C14.7101 17.3024 14.4849 17.077 14.2072 17.077H12.866C12.5883 17.077 12.3631 16.8515 12.3631 16.5735V15.2309Z"
        fill="white"
      />
    </svg>
  )
}

function BrandTextIcon() {
  return (
    <svg width="91" height="21" viewBox="0 0 91 21" fill="none" aria-hidden="true">
      <path d="M88.9897 3.16285L87.4225 4.40617C86.818 3.55548 85.497 2.24671 84.4894 1.33058L85.9448 0.261758C86.9747 1.11245 88.3404 2.33396 88.9897 3.16285ZM78.7578 15.5307L77.1009 16.9703C76.6308 16.0323 75.8919 14.8763 75.0859 13.6329C73.9216 15.6833 72.5335 17.3411 70.9214 18.5844C70.5856 18.0609 69.9139 17.2975 69.399 16.9267C71.0782 15.7706 72.5783 13.9601 73.7425 11.6916C72.5335 9.9466 71.2125 8.13615 70.0259 6.63107L71.4812 5.45318C72.4887 6.74013 73.6082 8.15796 74.7053 9.61941C75.3322 8.00527 75.8471 6.19481 76.183 4.31892H69.9587V2.53028H76.7427L77.0785 2.44303L78.4219 2.87928C77.9965 6.173 77.1905 9.0959 76.1158 11.5607C77.1905 13.044 78.1308 14.4618 78.7578 15.5307ZM87.3777 7.87439L89.0569 8.83415C88.1613 11.059 86.7508 13.2839 85.094 15.1816C85.7209 16.6431 86.4821 17.5156 87.4225 17.6465C87.9598 17.7119 88.2733 16.5558 88.43 14.2437C88.8554 14.68 89.7734 15.2253 90.1988 15.4216C89.6614 19.217 88.6539 20.2422 87.512 20.1549C85.7209 19.9804 84.3999 18.8462 83.4371 16.9049C82.2953 17.9519 81.0639 18.8462 79.8101 19.5224C79.407 18.9989 78.7578 18.3663 78.1756 17.9955C79.7653 17.2539 81.2878 16.185 82.6311 14.8763C82.0042 12.9568 81.6012 10.5574 81.3101 7.78714L78.601 8.09252L78.3323 6.23844L81.131 5.91125C80.9967 4.14442 80.8847 2.24671 80.8176 0.239944H82.9894C83.0341 2.13765 83.1237 3.96992 83.258 5.69312L89.6614 4.95149L89.9301 6.80557L83.4371 7.5472C83.661 9.61941 83.9745 11.4517 84.3551 13.0004C85.6313 11.4081 86.6836 9.64122 87.3777 7.87439Z" fill="white" />
      <path d="M51.4062 2.46484L50.1524 4.07898C49.4359 3.44641 47.8463 2.44302 46.7044 1.78864L47.9134 0.370816C49.0553 0.937946 50.6226 1.87589 51.4062 2.46484ZM50.6897 8.0707L49.4807 9.70665C48.6971 9.11771 47.0626 8.20158 45.876 7.59082L47.0626 6.10756C48.2269 6.65287 49.8613 7.48176 50.6897 8.0707ZM48.9434 11.8443L50.645 12.8695C49.9285 15.1598 48.9658 17.7774 48.0926 19.8277L46.2118 18.8244C47.0179 17.123 48.1373 14.3309 48.9434 11.8443ZM66.5191 11.9315V13.7638H63.6532V17.9737C63.6532 18.9334 63.4741 19.4787 62.78 19.7841C62.086 20.0895 61.0561 20.1113 59.5784 20.1113C59.5112 19.566 59.2201 18.7807 58.9962 18.2572C60.0485 18.3009 61.0337 18.3009 61.3247 18.279C61.6382 18.279 61.7054 18.1918 61.7054 17.9519V13.7638H58.5708V11.9315H61.7054V9.94659C62.1979 9.57578 62.78 9.0959 63.2502 8.57239H59.5784V7.45994L59.4216 7.69988C59.041 7.41632 58.1454 6.93644 57.6529 6.6965C57.9439 6.30387 58.235 5.86762 58.5037 5.36592H54.6303C54.6079 6.30387 54.5855 7.24182 54.5407 8.15795H58.2126C58.2126 8.15795 58.2126 8.74689 58.1902 8.98683C57.9663 15.8796 57.7872 18.3445 57.2051 19.1079C56.8244 19.6096 56.4438 19.7841 55.8617 19.8714C55.3691 19.9368 54.4959 19.9368 53.6228 19.915C53.578 19.3697 53.3989 18.6062 53.1302 18.0827C53.8914 18.1482 54.5855 18.17 54.899 18.17C55.2124 18.17 55.3915 18.1264 55.5483 17.8428C55.9065 17.4065 56.108 15.4216 56.2871 9.99022H54.4064C54.0705 13.9819 53.2198 17.6465 50.9808 20.0895C50.6674 19.6532 50.0404 19.0861 49.5479 18.7807C52.3689 15.8142 52.6152 10.5137 52.7272 5.36592H50.8465V3.44641H54.4064C54.0705 2.68296 53.3541 1.5487 52.772 0.763445L54.6527 0C55.3467 0.850695 56.108 1.96314 56.4886 2.7484L54.8318 3.44641H58.6604V5.03873C59.3321 3.62091 59.8246 1.87589 60.1381 0.15269L62.1084 0.458067C61.9516 1.26514 61.7725 2.09402 61.5486 2.85746H66.4967V4.77698H60.9217C60.6307 5.4968 60.3396 6.19481 59.9814 6.80556H64.8623L65.2429 6.6965L66.4743 7.56901C65.7131 8.5942 64.6832 9.68484 63.6532 10.5137V11.9315H66.5191Z" fill="white" />
      <path d="M37.8606 7.37272H34.1215V12.1933H37.8606V7.37272ZM40.0323 14.0692H32.0393V7.37272H28.457V16.8612H42.5847V18.8244H26.2852V7.37272H23.1507V5.43139H26.2852V0.698035H28.457V5.43139H32.0393V0.239967H34.1215V5.43139H37.8606V0.479908H40.0323V5.43139H43.1893V7.37272H40.0323V14.0692Z" fill="white" />
      <path d="M19.7251 9.33587V10.95H0.514958V9.33587H9.00056V7.6563H2.57479V6.08578H9.00056V4.51527H1.43293V2.92294H5.68692C5.37347 2.22493 4.8809 1.33061 4.36594 0.676231L6.22427 0.0872883C6.85117 0.850732 7.50047 1.89774 7.79153 2.59575L6.94073 2.92294H12.4709C12.9635 2.05043 13.568 0.91617 13.8815 0.0654755L15.9637 0.588981C15.5159 1.39605 15.0457 2.22493 14.5755 2.92294H18.6952V4.51527H11.1276V6.08578H17.6877V7.6563H11.1276V9.33587H19.7251ZM4.29878 14.0474V17.7556H6.87356V14.0474H4.29878ZM11.3962 14.0474H8.77667V17.7556H11.3962V14.0474ZM15.9189 14.0474H13.2993V17.7556H15.9189V14.0474ZM17.9563 17.7556H20.2177V19.5224H0V17.7556H2.37328V12.3678H17.9563V17.7556Z" fill="white" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg width="13" height="16" viewBox="0 0 13 16" fill="none" aria-hidden="true">
      <path
        d="M12.2064 11.0573C12.1839 11.1177 11.8915 12.151 11.1717 13.2069C10.5419 14.1271 9.89706 15.0473 8.87737 15.0624C7.87267 15.0775 7.55026 14.459 6.40311 14.459C5.25595 14.459 4.89606 15.0473 3.94385 15.0775C2.96164 15.1152 2.20437 14.0743 1.57455 13.1617C0.292438 11.3062 -0.697266 7.87437 0.629837 5.58145C1.28214 4.43499 2.45929 3.70337 3.73391 3.68074C4.69362 3.66566 5.61584 4.33694 6.20067 4.33694C6.80049 4.33694 7.91016 3.52235 9.07981 3.64303C9.56716 3.66566 10.9393 3.84668 11.8165 5.13645C11.749 5.1817 10.182 6.11697 10.197 8.01014C10.212 10.2955 12.1839 11.0498 12.2064 11.0573ZM8.30754 2.42114C8.83238 1.77249 9.18478 0.882473 9.08731 0C8.33753 0.03017 7.41531 0.505348 6.87547 1.14646C6.39561 1.70461 5.96824 2.60971 6.0882 3.48464C6.92045 3.52989 7.7827 3.03963 8.30754 2.42114Z"
        fill="#09090B"
      />
    </svg>
  )
}

function DownloadModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="关闭">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <div className="modal-header">
          <div className="modal-brand">
            <BrandIcon />
            <BrandTextIcon />
          </div>
          <p className="modal-tagline">Mac 也可以是游戏机</p>
        </div>

        <div className="modal-version-badge">
          <span className="modal-version-dot" />
          内测版本 Beta 0.1.0
        </div>

        <div className="modal-main-action">
          <a
            href="#"
            className="modal-download-btn"
            onClick={(e) => e.preventDefault()}
          >
            <AppleIcon />
            <span>立即下载 for macOS</span>
          </a>
          <p className="modal-system-req">仅支持 Mac M 系列芯片 · macOS 13+</p>
        </div>

        <div className="modal-divider" />

        <div className="modal-info-grid">
          <div className="modal-info-item">
            <span className="modal-info-label">版本号</span>
            <span className="modal-info-value">Beta 0.1.0</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">文件大小</span>
            <span className="modal-info-value">约 128 MB</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">更新日期</span>
            <span className="modal-info-value">2026 年 3 月</span>
          </div>
          <div className="modal-info-item">
            <span className="modal-info-label">系统要求</span>
            <span className="modal-info-value">macOS 13 Ventura+</span>
          </div>
        </div>

        <div className="modal-divider" />

        <div className="modal-community">
          <p className="modal-community-title">加入内测社群</p>
          <p className="modal-community-desc">
            与数千位内测用户一起，第一时间体验新功能，参与反馈共建
          </p>
          <button className="modal-community-btn">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.5 2.5L2.5 8L6.5 9.5L8 13.5L13.5 2.5Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
            加入社群
          </button>
        </div>

        <div className="modal-features">
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8C2 4.686 4.686 2 8 2s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" />
                <path d="M5.5 8l2 2 3-3" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="modal-feature-title">海量游戏库</p>
              <p className="modal-feature-desc">支持数百款 Mac 适配游戏，持续扩充</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v3M8 11v3M2 8h3M11 8h3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="8" cy="8" r="2.5" stroke="white" strokeWidth="1.2" />
              </svg>
            </div>
            <div>
              <p className="modal-feature-title">Apple Silicon 原生优化</p>
              <p className="modal-feature-desc">M 系列芯片深度适配，低延迟高帧率</p>
            </div>
          </div>
          <div className="modal-feature-item">
            <div className="modal-feature-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 5h10M3 8h10M3 11h6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="modal-feature-title">游戏手柄支持</p>
              <p className="modal-feature-desc">兼容主流手柄设备，即插即用</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [showDownload, setShowDownload] = useState(false)
  const appRef = usePageZoom()

  return (
    <main className="app" ref={appRef}>
      {showDownload && <DownloadModal onClose={() => setShowDownload(false)} />}

      <header className="app-header">
        <div className="header-inner">
          <div className="header-brand">
            <BrandIcon />
            <BrandTextIcon />
          </div>
          <nav className="header-nav">
            <div className="header-nav-item">版本介绍</div>
            <div className="header-nav-item">反馈体验</div>
            <div className="header-nav-item">功能前瞻</div>
          </nav>
          <div className="header-action">
            <RainbowButton
              className="header-rainbow-button"
              variant="outline"
              onClick={() => setShowDownload(true)}
            >
              立即下载
            </RainbowButton>
          </div>
        </div>
      </header>
      <section className="hero">
        <h1 className="hero-title">盖世游戏</h1>
        <div className="hero-headline" aria-label="Mac 也可以是游戏机">
          <span className="hero-headline-en">Mac</span>
          <span className="hero-headline-zh">也可以是游戏机</span>
        </div>
        <p className="hero-subtitle">客户端内测版本抢先体验开启</p>
        <div className="hero-actions">
          <button
            type="button"
            className="download-button-primary"
            onClick={() => setShowDownload(true)}
          >
            <AppleIcon />
            <span className="download-button-label">立即下载</span>
          </button>
          <button type="button" className="download-button-secondary">
            <span className="download-button-secondary-label">加入内测社群</span>
          </button>
        </div>
        <p className="hero-caption">本次内测仅支持 Mac M 系列芯片</p>
        <div className="hero-showcase">
          <ShowcaseSparkles />
        </div>
        <div className="showcase-content">
          <h2 className="showcase-title">畅玩 Windows 游戏</h2>
          <p className="showcase-subtitle">
            突破硬件设备局限性，在Mac 也能体验 Windows 3A 大作
          </p>
          <div className="showcase-grid">
            <CometCard className="showcase-box showcase-box-small">
              <div className="showcase-box-icon">
                <svg width="396" height="405" viewBox="0 0 396 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.4" d="M273.942 232.22C281.222 242.548 289.568 249.225 298.979 252.252C294.895 264.894 288.413 278.07 279.535 291.781C265.863 312.436 252.368 322.763 239.051 322.763C234.079 322.763 226.71 321.072 216.944 317.688C207.888 314.305 199.986 312.614 193.239 312.614C186.492 312.614 179.034 314.394 170.866 317.955C162.343 321.339 155.329 323.03 149.825 323.03C133.844 323.03 118.129 309.409 102.681 282.166C87.2332 255.279 79.5092 228.837 79.5092 202.841C79.5092 178.803 85.3688 159.128 97.088 143.815C109.162 128.502 124.078 120.845 141.834 120.845C145.741 120.845 150.091 121.335 154.885 122.314C159.679 123.293 164.651 125.118 169.801 127.789C175.305 130.816 179.833 132.909 183.384 134.066C186.936 135.223 189.688 135.802 191.641 135.802C193.949 135.802 197.501 135.268 202.295 134.199C207.089 133.131 211.883 131.172 216.678 128.324C221.827 125.475 226.266 123.338 229.995 121.913C233.724 120.489 237.541 119.777 241.448 119.777C253.877 119.777 265.064 123.16 275.007 129.926C280.334 133.487 285.75 138.74 291.255 145.684C283.087 152.807 277.138 159.039 273.409 164.38C266.484 174.352 263.022 185.213 263.022 196.965C263.022 209.963 266.662 221.715 273.942 232.22ZM220.406 107.491C214.192 113.367 208.51 117.195 203.36 118.975C201.585 119.51 199.321 119.999 196.568 120.444C193.816 120.89 190.664 121.29 187.113 121.646C187.291 105.977 191.375 92.4448 199.365 81.0491C207.355 69.6534 220.495 61.8188 238.784 57.5454C239.139 59.326 239.406 60.5724 239.583 61.2846V64.2226C239.583 70.6327 238.074 77.844 235.055 85.8567C231.859 93.6912 226.976 100.903 220.406 107.491Z" stroke="url(#paint0_linear_12_863)" strokeWidth="12.7709" />
                  <path opacity="0.4" d="M273.942 232.22C281.222 242.548 289.568 249.225 298.979 252.252C294.895 264.894 288.413 278.07 279.535 291.781C265.863 312.436 252.368 322.763 239.051 322.763C234.079 322.763 226.71 321.072 216.944 317.688C207.888 314.305 199.986 312.614 193.239 312.614C186.492 312.614 179.034 314.394 170.866 317.955C162.343 321.339 155.329 323.03 149.825 323.03C133.844 323.03 118.129 309.409 102.681 282.166C87.2332 255.279 79.5092 228.837 79.5092 202.841C79.5092 178.803 85.3688 159.128 97.088 143.815C109.162 128.502 124.078 120.845 141.834 120.845C145.741 120.845 150.091 121.335 154.885 122.314C159.679 123.293 164.651 125.118 169.801 127.789C175.305 130.816 179.833 132.909 183.384 134.066C186.936 135.223 189.688 135.802 191.641 135.802C193.949 135.802 197.501 135.268 202.295 134.199C207.089 133.131 211.883 131.172 216.678 128.324C221.827 125.475 226.266 123.338 229.995 121.913C233.724 120.489 237.541 119.777 241.448 119.777C253.877 119.777 265.064 123.16 275.007 129.926C280.334 133.487 285.75 138.74 291.255 145.684C283.087 152.807 277.138 159.039 273.409 164.38C266.484 174.352 263.022 185.213 263.022 196.965C263.022 209.963 266.662 221.715 273.942 232.22ZM220.406 107.491C214.192 113.367 208.51 117.195 203.36 118.975C201.585 119.51 199.321 119.999 196.568 120.444C193.816 120.89 190.664 121.29 187.113 121.646C187.291 105.977 191.375 92.4448 199.365 81.0491C207.355 69.6534 220.495 61.8188 238.784 57.5454C239.139 59.326 239.406 60.5724 239.583 61.2846V64.2226C239.583 70.6327 238.074 77.844 235.055 85.8567C231.859 93.6912 226.976 100.903 220.406 107.491Z" stroke="url(#paint1_linear_12_863)" strokeOpacity="0.2" strokeWidth="1.41899" />
                  <path d="M273.942 232.22C281.222 242.548 289.568 249.225 298.979 252.252C294.895 264.894 288.413 278.07 279.535 291.781C265.863 312.436 252.368 322.763 239.051 322.763C234.079 322.763 226.71 321.072 216.944 317.688C207.888 314.305 199.986 312.614 193.239 312.614C186.492 312.614 179.034 314.394 170.866 317.955C162.343 321.339 155.329 323.03 149.825 323.03C133.844 323.03 118.129 309.409 102.681 282.166C87.2332 255.279 79.5092 228.837 79.5092 202.841C79.5092 178.803 85.3688 159.128 97.088 143.815C109.162 128.502 124.078 120.845 141.834 120.845C145.741 120.845 150.091 121.335 154.885 122.314C159.679 123.293 164.651 125.118 169.801 127.789C175.305 130.816 179.833 132.909 183.384 134.066C186.936 135.223 189.688 135.802 191.641 135.802C193.949 135.802 197.501 135.268 202.295 134.199C207.089 133.131 211.883 131.172 216.678 128.324C221.827 125.475 226.266 123.338 229.995 121.913C233.724 120.489 237.541 119.777 241.448 119.777C253.877 119.777 265.064 123.16 275.007 129.926C280.334 133.487 285.75 138.74 291.255 145.684C283.087 152.807 277.138 159.039 273.409 164.38C266.484 174.352 263.022 185.213 263.022 196.965C263.022 209.963 266.662 221.715 273.942 232.22ZM220.406 107.491C214.192 113.367 208.51 117.195 203.36 118.975C201.585 119.51 199.321 119.999 196.568 120.444C193.816 120.89 190.664 121.29 187.113 121.646C187.291 105.977 191.375 92.4448 199.365 81.0491C207.355 69.6534 220.495 61.8188 238.784 57.5454C239.139 59.326 239.406 60.5724 239.583 61.2846V64.2226C239.583 70.6327 238.074 77.844 235.055 85.8567C231.859 93.6912 226.976 100.903 220.406 107.491Z" stroke="url(#paint2_radial_12_863)" strokeWidth="0.709494" />
                  <defs>
                    <linearGradient id="paint0_linear_12_863" x1="173.635" y1="57.5454" x2="173.635" y2="304.395" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#B2FCFF" />
                      <stop offset="1" stopColor="#B2FCFF" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_12_863" x1="173.635" y1="57.5454" x2="173.635" y2="304.395" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#B2FCFF" />
                      <stop offset="1" stopColor="#B2FCFF" stopOpacity="0" />
                    </linearGradient>
                    <radialGradient id="paint2_radial_12_863" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(173.635 89.2478) rotate(90) scale(245.147 202.657)">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="showcase-box-text">Mac 畅游3A游戏</div>
              </div>
            </CometCard>
            <CometCard className="showcase-box showcase-box-large">
              <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute top-12 text-[#86868B] text-xl font-light tracking-widest">打破壁垒 畅玩无界</div>
                <div className="relative z-10 text-6xl font-bold text-white/10 select-none pointer-events-none">
                  GAMEHUB
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                  <div className="w-[500px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full" />
                </div>
              </div>
            </CometCard>
          </div>
        </div>
        <div className="steam-management">
          <h2 className="steam-management-title">Steam 多账号管理</h2>
          <p className="steam-management-subtitle">
            Steam 账号互通，自动同步账号数据和云存档，续玩不脱节
          </p>
        </div>
        <div className="user-popup-container">
          <Marquee style={{ "--duration": "60s", "--gap": "24px" }}>
            {firstRow.map((user, j) => (
              <UserPopupCard key={`r1-${j}`} user={user} />
            ))}
          </Marquee>
          <Marquee reverse style={{ "--duration": "60s", "--gap": "24px" }}>
            {secondRow.map((user, j) => (
              <UserPopupCard key={`r2-${j}`} user={user} />
            ))}
          </Marquee>
          <div className="marquee-fade-left" />
          <div className="marquee-fade-right" />
        </div>
        <div className="steam-data-text">
          我们同步的 Steam 数据
        </div>
        <div className="steam-data-section">
          <img className="steam-data-bg" src="/Background.png" alt="" />
          <img className="steam-data-center-img" src="/image 213.png" alt="" />
          <div className="steam-data-grid">
            <div className="steam-data-card">
              <div className="game-covers-stack">
                <AnimatedTooltip items={gameCovers} />
              </div>
              <span className="steam-data-card-label">游戏数量</span>
            </div>
          </div>
          <div className="steam-data-grid-right">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <span className="steam-hours-value">¥1967.7</span>
                </div>
              </div>
              <span className="steam-data-card-label">账号价值</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-left">
            <div className="steam-data-card steam-data-card-small">
              <div className="steam-hours-card">
                <div className="steam-hours-inner">
                  <span className="steam-hours-value">1967.7h</span>
                </div>
              </div>
              <span className="steam-data-card-label">游戏时长</span>
            </div>
          </div>
          <div className="steam-data-grid-bottom-right">
            <div className="steam-data-card steam-data-card-cloud">
              <img className="steam-cloud-icon" src="/Group 2 (6).svg" alt="" />
              <span className="steam-data-card-label">游戏云存档</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
