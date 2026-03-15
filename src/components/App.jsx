import { useState, useEffect, useRef } from "react"
import { RainbowButton } from "@/registry/magicui/rainbow-button"
import { ShowcaseSparkles } from "@/components/ShowcaseSparkles"
import { CometCard } from "@/components/ui/comet-card"
import { Marquee } from "@/registry/magicui/marquee"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import LaserFlow from "@/components/LaserFlow"

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

const featurePreviewPhotoRows = [
  [
    { src: "/source_image.png", position: "50% 45%" },
    { src: "/image 185.png", position: "50% 50%" },
    { src: "/source_image.png", position: "55% 62%" },
    { src: "/image 185.png", position: "45% 38%" },
    { src: "/source_image.png", position: "48% 52%" },
  ],
  [
    { src: "/image 185.png", position: "52% 60%" },
    { src: "/source_image.png", position: "46% 40%" },
    { src: "/image 185.png", position: "50% 52%" },
    { src: "/source_image.png", position: "58% 66%" },
    { src: "/image 185.png", position: "43% 42%" },
  ],
  [
    { src: "/source_image.png", position: "50% 48%" },
    { src: "/image 185.png", position: "48% 56%" },
    { src: "/source_image.png", position: "56% 64%" },
    { src: "/image 185.png", position: "52% 44%" },
    { src: "/source_image.png", position: "44% 38%" },
  ],
]

const faqItems = [
  {
    question: "盖世游戏是什么？",
    answer:
      "盖世游戏以模拟器作为核心能力，结合云游戏技术为玩家带来更畅快的游戏体验，目前已支持安卓移动端和PC端。\n我们会持续提升服务质量，如在使用过程中遇到问题，请通过设置中心提交反馈告知，我们将尽全力解决！未来我们将推出客户端（Windows版、Mac版），欢迎各位关注和支持！",
  },
  {
    question: "为什么PC端的盖世账号与移动端的盖世账号不一致？",
    answer:
      "请确认是否使用了同一登录方式（手机号、微信、QQ 等），并检查是否切换到了正确服务器环境；如仍不一致，可在设置中心提交账号信息进行核查。",
  },
  {
    question: "为什么授权登录Steam账号后，无法获取游戏库全部游戏？",
    answer:
      "通常与 Steam 隐私设置、网络状态或授权状态有关。请将游戏详情和库存可见性调整为公开后重新授权，再尝试同步。",
  },
  {
    question: "如何换绑/修改盖世账号信息？",
    answer:
      "进入设置中心-账号与安全页面即可进行绑定信息管理；部分敏感操作会触发身份验证，以保障账号安全。",
  },
  {
    question: "为什么启动游戏失败，包括但不限于遇到报错、闪退等？",
    answer:
      "建议先重启应用并检查网络、系统版本和驱动环境；若问题持续，请在反馈中附带错误截图与日志，方便快速定位。",
  },
  {
    question: "如何查询消费记录？",
    answer:
      "可在个人中心-订单记录中查看历史消费与明细，如存在异常账单可发起工单进行核对处理。",
  },
  {
    question: "如何反馈游戏中遇到的问题？",
    answer:
      "打开设置中心-问题反馈，提交问题描述、复现步骤与截图/录屏，客服与技术团队会尽快跟进处理。",
  },
]

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

function HeroHeadlineBlock({ enText, zhText, subtitle, showDownloadButton = false, onDownload }) {
  return (
    <>
      <div className="hero-headline" aria-label={`${enText} ${zhText}`}>
        <span className="hero-headline-en">{enText}</span>
        <span className="hero-headline-zh">{zhText}</span>
      </div>
      <p className="hero-subtitle">{subtitle}</p>
      {showDownloadButton && (
        <div className="hero-single-action">
          <button
            type="button"
            className="download-button-primary"
            onClick={onDownload}
          >
            <AppleIcon />
            <span className="download-button-label">立即下载</span>
          </button>
        </div>
      )}
    </>
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
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
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
        <HeroHeadlineBlock
          enText="Mac"
          zhText="也可以是游戏机"
          subtitle="客户端内测版本抢先体验开启"
        />
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

      <section className="compat-section">
        <h2 className="compat-title">个性化兼容性方案</h2>
        <p className="compat-desc">配置游戏专属模拟器兼容性方案，为玩家提供更极致的游戏体验</p>
        <div className="compat-cards">
          <div className="compat-card">
            <h3 className="compat-card-title">通用配置</h3>
            <p className="compat-card-desc">基于游戏特性与设备环境自主调优，拥有更高自由度、更可控的游戏体验。根据游戏特性与个人习惯进行深度自定义，拥有专属你的游玩体验</p>
            <div className="compat-inner-box">
              <div className="compat-inner-box-content">
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 18V0L8.2868 9.8849V2.46044L22 18H18.6769L10.979 9.62591V18L2.81835 7.68346V18H0Z" fill="#AEE352"/>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">MetalHUD</span>
                  <span className="compat-setting-desc">开启后在游戏中显示 Metal性能监控面板</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_21_937)">
                      <path d="M8.67589 12.884C8.79668 12.884 8.91629 12.8602 9.02789 12.814C9.13948 12.7678 9.24088 12.7001 9.32629 12.6146C9.4117 12.5292 9.47945 12.4278 9.52567 12.3162C9.57188 12.2046 9.59566 12.085 9.59565 11.9642V4.24388C9.59565 2.9183 10.6735 1.83952 12 1.83952C13.3266 1.83952 14.4044 2.9183 14.4044 4.24388V5.35406C14.4044 5.86145 14.8155 6.27382 15.3241 6.27382C15.8327 6.27382 16.2439 5.86145 16.2439 5.35406V4.24376C16.2439 1.90352 14.3394 0 12 0C9.66062 0 7.75613 1.90339 7.75613 4.24388V11.9642C7.75612 12.085 7.7799 12.2046 7.82611 12.3162C7.87233 12.4278 7.94008 12.5292 8.02549 12.6146C8.1109 12.7001 8.2123 12.7678 8.3239 12.814C8.43549 12.8602 8.5551 12.884 8.67589 12.884ZM15.3241 11.0813C15.2033 11.0813 15.0837 11.1051 14.9721 11.1513C14.8605 11.1975 14.7591 11.2653 14.6737 11.3507C14.5883 11.4361 14.5206 11.5375 14.4744 11.6491C14.4281 11.7607 14.4044 11.8803 14.4044 12.0011V19.7562C14.4044 21.0817 13.3266 22.1605 12 22.1605C10.6735 22.1605 9.59565 21.0817 9.59565 19.7561V18.6308C9.59565 18.1234 9.1845 17.7111 8.67589 17.7111C8.16728 17.7111 7.75613 18.1233 7.75613 18.6308V19.7561C7.75613 22.0967 9.66062 24 12 24C14.3394 24 16.2439 22.0966 16.2439 19.7561V12.001C16.2439 11.8802 16.2201 11.7606 16.1739 11.649C16.1277 11.5374 16.0599 11.436 15.9745 11.3506C15.8891 11.2652 15.7877 11.1975 15.6761 11.1513C15.5645 11.1051 15.4449 11.0813 15.3241 11.0813Z" fill="#FF614C"/>
                      <path d="M12.9198 15.3241C12.9198 15.2033 12.896 15.0837 12.8498 14.9721C12.8036 14.8605 12.7358 14.7591 12.6504 14.6737C12.565 14.5883 12.4636 14.5206 12.352 14.4744C12.2404 14.4281 12.1208 14.4044 12 14.4044H4.23515C2.91515 14.4044 1.83952 13.3256 1.83952 12C1.83952 10.6744 2.91503 9.59565 4.23515 9.59565H5.34545C5.85394 9.59565 6.26509 9.18353 6.26509 8.67589C6.26509 8.16825 5.85394 7.75613 5.34533 7.75613H4.23515C1.90012 7.75613 0 9.65953 0 12C0 14.3405 1.90012 16.2439 4.23515 16.2439H12C12.1208 16.2439 12.2404 16.2201 12.352 16.1739C12.4636 16.1277 12.565 16.0599 12.6504 15.9745C12.7358 15.8891 12.8036 15.7877 12.8498 15.6761C12.896 15.5645 12.9198 15.4449 12.9198 15.3241ZM19.7497 7.75613H12C11.4914 7.75613 11.0802 8.1685 11.0802 8.67589C11.0802 9.18328 11.4914 9.59565 12 9.59565H19.7497C21.0784 9.59565 22.1606 10.6744 22.1606 12C22.1606 13.3256 21.0784 14.4044 19.7497 14.4044H18.685C18.1764 14.4044 17.7652 14.8165 17.7652 15.3241C17.7652 15.8318 18.1764 16.2439 18.685 16.2439H19.7497C22.0933 16.2439 24 14.3405 24 12C24 9.65953 22.0933 7.75613 19.7497 7.75613Z" fill="#FF614C"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_21_937">
                        <rect width="24" height="24" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">AVX加速</span>
                  <span className="compat-setting-desc">让Intel应用在M芯Mac上识别并启用AVX指令</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                    <path d="M3.06328 0.123288C3.65593 -0.164694 4.37698 0.0690572 4.67344 0.645083C4.9698 1.22133 4.72938 1.92228 4.13672 2.21047L2.4 3.05468V17.9452L4.13672 18.7894C4.72939 19.0775 4.96959 19.7786 4.67344 20.3548C4.37705 20.9311 3.65606 21.1647 3.06328 20.8766L1.32656 20.0324C0.513605 19.6371 0 18.8289 0 17.9452V3.05468C0.000143472 2.17107 0.51363 1.36269 1.32656 0.967502L3.06328 0.123288Z" fill="#FF614C"/>
                    <path d="M19.3266 0.645083C19.623 0.0690572 20.3441 -0.164694 20.9367 0.123288L22.6734 0.967502C23.4864 1.36269 23.9999 2.17107 24 3.05468V17.9452C24 18.8289 23.4864 19.6371 22.6734 20.0324L20.9367 20.8766C20.3439 21.1647 19.623 20.9311 19.3266 20.3548C19.0304 19.7786 19.2706 19.0775 19.8633 18.7894L21.6 17.9452V3.05468L19.8633 2.21047C19.2706 1.92228 19.0302 1.22133 19.3266 0.645083Z" fill="#FF614C"/>
                    <path d="M7.2 16.3331C7.86262 16.3331 8.3998 16.8556 8.4 17.4997C8.4 18.144 7.86274 18.6664 7.2 18.6664C6.53726 18.6664 6 18.144 6 17.4997C6.0002 16.8556 6.53738 16.3331 7.2 16.3331Z" fill="#FF614C"/>
                    <path d="M12 16.3331C12.6626 16.3331 13.1998 16.8556 13.2 17.4997C13.2 18.144 12.6627 18.6664 12 18.6664C11.3373 18.6664 10.8 18.144 10.8 17.4997C10.8002 16.8556 11.3374 16.3331 12 16.3331Z" fill="#FF614C"/>
                    <path d="M16.8 16.3331C17.4626 16.3331 17.9998 16.8556 18 17.4997C18 18.144 17.4627 18.6664 16.8 18.6664C16.1373 18.6664 15.6 18.144 15.6 17.4997C15.6002 16.8556 16.1374 16.3331 16.8 16.3331Z" fill="#FF614C"/>
                    <path d="M8.73047 3.50014C8.90185 3.50014 9.06544 3.57157 9.1793 3.6961L12 6.78016L14.8207 3.6961C14.9346 3.57157 15.0981 3.50014 15.2695 3.50014H17.2641C17.7814 3.50026 18.056 4.09464 17.7129 4.47082L13.8 8.74999L17.7129 13.0292C18.0566 13.4053 17.7816 13.9997 17.2641 13.9998H15.2695C15.0981 13.9998 14.9346 13.9284 14.8207 13.8039L12 10.7187L9.1793 13.8039C9.06544 13.9284 8.90185 13.9998 8.73047 13.9998H6.73594C6.21843 13.9997 5.94345 13.4053 6.28711 13.0292L10.1988 8.74999L6.28711 4.47082C5.94397 4.09464 6.21858 3.50026 6.73594 3.50014H8.73047Z" fill="#FF614C"/>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">环境变量</span>
                  <span className="compat-setting-desc">配置容器环境变量，适配特定程序需求</span>
                </div>
              </div>
              <div className="compat-setting-item compat-setting-item-last">
                <div className="compat-setting-row">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9.17189 2.41402C10.7339 0.852226 13.2661 0.852229 14.8281 2.41402L21.586 9.17183C23.1478 10.7339 23.1477 13.266 21.586 14.8281L14.8281 21.5859C13.2661 23.1477 10.7339 23.1477 9.17189 21.5859L2.41408 14.8281C0.852287 13.266 0.85229 10.7339 2.41408 9.17183L9.17189 2.41402ZM13.4141 3.82808C12.6331 3.04734 11.3669 3.04734 10.586 3.82808L3.82814 10.5859C3.0474 11.3669 3.0474 12.633 3.82814 13.414L10.586 20.1718C11.367 20.9526 12.6331 20.9526 13.4141 20.1718L20.1719 13.414C20.9526 12.633 20.9526 11.3669 20.1719 10.5859L13.4141 3.82808Z" fill="#AEE352"/>
                      <path d="M10.586 6.49977C11.367 5.71882 12.6331 5.71883 13.4141 6.49977L17.5001 10.5857C18.281 11.3667 18.281 12.6328 17.5001 13.4138L13.4141 17.4998C12.6331 18.2807 11.3671 18.2807 10.586 17.4998L6.50008 13.4138C5.71913 12.6328 5.71913 11.3667 6.50008 10.5857L10.586 6.49977ZM7.91414 11.9998L12.0001 16.0857L16.086 11.9998L12.0001 7.91384L7.91414 11.9998Z" fill="#AEE352"/>
                      <rect x="11" width="2" height="24" rx="1" fill="#AEE352"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">启动参数</span>
                    <span className="compat-setting-desc">添加程序启动参数，用于启用特定功能或解决兼容性问题</span>
                  </div>
                </div>
                <div className="compat-setting-input">
                  <span className="compat-setting-input-text">请输入参数</span>
                </div>
              </div>
              </div>
            </div>
            <div className="compat-inner-box-2">
              <div className="compat-inner-box-2-content">
              <div className="compat-setting-item compat-setting-item-img">
                <img className="compat-game-cover" src="/Rectangle 111.png" alt="" />
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                    <path d="M13.002 12C13.5542 12 14.002 12.4477 14.002 13V13.002C14.002 13.5542 13.5542 14.002 13.002 14.002H13C12.4477 14.002 12 13.5542 12 13.002V13C12 12.4477 12.4477 12 13 12H13.002Z" fill="#1DC19C"/>
                    <path d="M17.002 12C17.5542 12 18.002 12.4477 18.002 13V13.002C18.002 13.5542 17.5542 14.002 17.002 14.002H17C16.4477 14.002 16 13.5542 16 13.002V13C16 12.4477 16.4477 12 17 12H17.002Z" fill="#1DC19C"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7607 0C16.3188 0.000340941 16.8656 0.156186 17.3398 0.450195C17.8131 0.743711 18.195 1.16368 18.4434 1.66211L21.8945 8.55273C21.8973 8.55834 21.8987 8.56466 21.9014 8.57031C21.9132 8.59499 21.9248 8.61976 21.9346 8.64551C21.9381 8.65485 21.9411 8.66439 21.9443 8.67383C21.9515 8.6947 21.958 8.71583 21.9639 8.7373C21.9685 8.75416 21.9729 8.77102 21.9766 8.78809C21.9913 8.85645 22 8.92722 22 9V15C22 15.7957 21.6837 16.5585 21.1211 17.1211C20.5585 17.6837 19.7957 18 19 18H3C2.20435 18 1.44152 17.6837 0.878906 17.1211C0.316296 16.5585 0 15.7956 0 15V9C0 8.92729 0.00772434 8.85639 0.0224609 8.78809C0.0261576 8.77103 0.0305721 8.75414 0.0351562 8.7373C0.0409849 8.71585 0.0474915 8.69469 0.0546875 8.67383C0.0579422 8.6644 0.0609144 8.65485 0.0644531 8.64551C0.0764964 8.61374 0.0903768 8.58286 0.105469 8.55273L3.55566 1.66211C3.80407 1.16352 4.18671 0.743784 4.66016 0.450195C5.13444 0.156133 5.68218 0.000295962 6.24023 0H15.7607ZM2 15C2 15.2652 2.10544 15.5195 2.29297 15.707C2.48051 15.8945 2.73478 16 3 16H19C19.2652 16 19.5195 15.8945 19.707 15.707C19.8945 15.5195 20 15.2652 20 15V10H2V15ZM6.24023 2C6.05419 2.0001 5.87198 2.05234 5.71387 2.15039C5.55597 2.24837 5.42845 2.3883 5.3457 2.55469L4.38965 2.08008L5.34375 2.55762L2.61914 8H19.3809L16.6562 2.55762L16.6543 2.55469L17.5498 2.11035L17.6094 2.08008L16.6543 2.55469C16.5715 2.38832 16.4441 2.24836 16.2861 2.15039C16.1281 2.05239 15.9457 2.00015 15.7598 2H6.24023Z" fill="#1DC19C"/>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">游戏路径</span>
                  <span className="compat-setting-desc">设置您游戏的安装路径</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.1053 9V5C21.1053 3.96435 20.3595 3.113 19.4039 3.01074L19.2105 3H14.9474C14.4242 3 14 2.55228 14 2C14 1.44772 14.4242 1 14.9474 1H19.2105L19.4057 1.00488C21.4079 1.11211 23 2.85996 23 5V9C23 9.55229 22.5758 10 22.0526 10C21.5294 10 21.1053 9.55229 21.1053 9Z" fill="#1796E2"/>
                    <path d="M2.89474 15V19C2.89474 20.0357 3.64053 20.887 4.59611 20.9893L4.78947 21H9.05263C9.57585 21 10 21.4477 10 22C10 22.5523 9.57585 23 9.05263 23H4.78947L4.59426 22.9951C2.59211 22.8879 1 21.14 1 19V15C1 14.4477 1.42415 14 1.94737 14C2.47059 14 2.89474 14.4477 2.89474 15Z" fill="#1796E2"/>
                    <path d="M0 12L4.41539 0H6.58462L11 12H8.75385L5.55385 2.90196H5.46154L2.24615 12H0ZM8 6.69804L8.52308 8.73726H2.56923L3.06154 6.69804H8Z" fill="#1796E2"/>
                    <path d="M24 14.0779V20.3247H22.1576V15.8312H14.8424V20.3247H13V14.0779H24ZM23.0653 18.5974V20.3247H13.9483V18.5974H23.0653ZM19.4754 12V24H17.4975V12H19.4754Z" fill="#1796E2"/>
                  </svg>
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">语言</span>
                  <span className="compat-setting-desc">设置Windows系统语言</span>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="compat-card">
            <h3 className="compat-card-title">兼容性方案</h3>
            <p className="compat-card-desc">为不同游戏提供更灵活的兼容性方案，从默认可玩，到按你习惯去玩.
            兼顾游戏运行稳定性与性能表现，深度搭配更灵活的配置组合方案</p>
            <div className="compat-inner-box-right">
              <div className="compat-inner-box-right-content">
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.307 0.287171C11.7225 -0.00783302 12.2775 -0.00783302 12.693 0.287171L23.4914 7.9625C23.8105 8.1895 24 8.55916 24 8.95267C23.9999 9.34601 23.8104 9.71471 23.4914 9.94166L20.5031 12.064L20.798 12.2769L23.4914 14.191C23.8105 14.418 24 14.7877 24 15.1812C23.9999 15.5745 23.8104 15.9432 23.4914 16.1702L12.693 23.8443C12.2773 24.1398 11.7227 24.1398 11.307 23.8443L0.508614 16.1702C0.189649 15.9432 0.000116372 15.5745 0 15.1812C8.87163e-08 14.7877 0.189467 14.418 0.508614 14.191L3.49452 12.0675L3.20204 11.8569C2.67789 11.4844 2.26795 11.1935 1.85826 10.9023C1.44697 10.6099 1.03569 10.3163 0.508614 9.94166C0.18965 9.71471 9.26076e-05 9.34601 0 8.95267C2.53475e-08 8.55916 0.189467 8.1895 0.508614 7.9625L11.307 0.287171ZM13.2099 6.88242L16.0677 8.91482C16.6102 9.30065 16.7397 10.0564 16.3567 10.603C15.9736 11.1493 15.2231 11.2796 14.6805 10.894L12 8.98698L3.28778 15.18L10.8042 20.5201V17.2585L8.6065 15.6993L7.93226 15.219C7.38968 14.8332 7.26029 14.0763 7.6433 13.5297C8.02647 12.9836 8.77696 12.8543 9.3195 13.2399L12 15.1433L20.7122 8.95149L13.2099 3.61851V6.88242ZM13.2099 17.2479V20.5106L20.7122 15.18L19.4049 14.2513L18.841 13.8468C18.7019 13.7466 18.5911 13.6215 18.5086 13.4824L13.2099 17.2479ZM3.28778 8.95149C3.6852 9.23398 4.08601 9.52061 4.59514 9.88251L4.60219 9.88488L5.42443 10.4776C5.47499 10.514 5.52102 10.5546 5.56421 10.597L10.8042 6.87295V3.60905L3.28778 8.95149Z" fill="#AEE352"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">兼容性方案</span>
                    <span className="compat-setting-desc">官方方案或者您可以自定义选择</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.0002 14.8866C11.0002 13.4577 10.2377 12.1373 9.00024 11.4227L3.60767 8.30848V15.1132C3.60768 16.1849 4.17957 17.1749 5.10767 17.7108L11.0002 21.1122V14.8866ZM13.0002 21.1122L16.1965 19.2675V12.3856C16.1965 11.0215 15.5008 9.75167 14.3518 9.01649L7.72583 4.77723L4.60767 6.57704L10.0002 9.69032C11.8566 10.7621 13.0002 12.7431 13.0002 14.8866V21.1122ZM18.1965 18.1122L18.8918 17.7108C19.82 17.1749 20.3918 16.185 20.3918 15.1132V8.88661C20.3918 7.81482 19.82 6.82485 18.8918 6.28895L13.5002 3.17567C12.5721 2.63978 11.4284 2.6398 10.5002 3.17567L9.677 3.65028L15.4299 7.33192C17.1534 8.43471 18.1965 10.3396 18.1965 12.3856V18.1122ZM22.3918 15.1132L22.3811 15.4462C22.2708 17.1027 21.3422 18.6059 19.8918 19.4432L14.5003 22.5564C12.9533 23.4496 11.0472 23.4497 9.50015 22.5565L4.10767 19.4432C2.6573 18.6059 1.72872 17.1028 1.61841 15.4462L1.60767 15.1132V5.99989L9.50024 1.44325C11.0472 0.550208 12.9533 0.550126 14.5002 1.44325L19.8918 4.55653C21.4388 5.44969 22.3918 7.10029 22.3918 8.88661V15.1132Z" fill="#1796E2"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">兼容层</span>
                    <span className="compat-setting-desc">官方方案或者您可以自定义选择</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5ZM17 5C17 7.76142 14.7614 10 12 10C9.23858 10 7 7.76142 7 5C7 2.23858 9.23858 0 12 0C14.7614 0 17 2.23858 17 5Z" fill="#AEE352"/>
                      <path d="M8.61919 8.02654C8.88093 7.54044 9.4875 7.35788 9.97368 7.61931C10.4598 7.88105 10.6423 8.48762 10.3809 8.9738L6.88091 15.4738C6.61916 15.9599 6.0126 16.1425 5.52641 15.881C5.04032 15.6193 4.85776 15.0127 5.11919 14.5265L8.61919 8.02654Z" fill="#AEE352"/>
                      <path d="M15.3808 8.02654C15.1191 7.54044 14.5125 7.35788 14.0263 7.61931C13.5402 7.88105 13.3577 8.48762 13.6191 8.9738L17.1191 15.4738C17.3808 15.9599 17.9874 16.1425 18.4736 15.881C18.9597 15.6193 19.1422 15.0127 18.8808 14.5265L15.3808 8.02654Z" fill="#AEE352"/>
                      <path d="M8.99994 18.0001C8.44774 18.0002 7.99993 18.4481 7.99992 19.0003C8.00007 19.5525 8.448 20.0004 9.00019 20.0004L14.9997 20C15.552 20 16.0006 19.5525 16.0006 19.0002C16.0006 18.448 15.5525 18.0003 15.0003 18.0002L8.99994 18.0001Z" fill="#AEE352"/>
                      <path d="M8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22C6.65685 22 8 20.6569 8 19ZM10 19C10 21.7614 7.76142 24 5 24C2.23858 24 0 21.7614 0 19C0 16.2386 2.23858 14 5 14C7.76142 14 10 16.2386 10 19Z" fill="#AEE352"/>
                      <path d="M22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22C20.6569 22 22 20.6569 22 19ZM24 19C24 21.7614 21.7614 24 19 24C16.2386 24 14 21.7614 14 19C14 16.2386 16.2386 14 19 14C21.7614 14 24 16.2386 24 19Z" fill="#AEE352"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">同步模式</span>
                    <span className="compat-setting-desc">选择 Wine 的同步机制，不同机制会影响程序的性能与兼容性</span>
                  </div>
                </div>
                <div className="compat-setting-item">
                  <span className="compat-setting-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8.99981 20.7677C8.44762 20.7678 7.99981 21.2157 7.9998 21.7679C7.99995 22.3201 8.44787 22.7679 9.00006 22.7679L14.9996 22.7676C15.5519 22.7676 16.0004 22.3201 16.0005 21.7678C16.0005 21.2156 15.5524 20.7679 15.0002 20.7678L8.99981 20.7677Z" fill="#91D62A"/>
                      <path d="M21 17V19H3V17H21ZM22 16V5C22 4.44772 21.5523 4 21 4H3C2.44772 4 2 4.44772 2 5V16C2 16.5523 2.44772 17 3 17V19C1.39489 19 0.0842144 17.7394 0.00390625 16.1543L0 16V5C0 3.34315 1.34315 2 3 2H21C22.6569 2 24 3.34315 24 5V16C24 17.6569 22.6569 19 21 19V17C21.5523 17 22 16.5523 22 16Z" fill="#91D62A"/>
                      <path d="M13.8379 10.4031L14.9651 11.555L16.0928 10.4031C16.3004 10.1909 16.6369 10.1909 16.8443 10.4031C17.0519 10.6152 17.0519 10.959 16.8443 11.171L15.7166 12.3228L16.8443 13.4751C17.0519 13.6872 17.0519 14.0311 16.8443 14.243C16.6367 14.4552 16.3002 14.4552 16.0928 14.243L14.9651 13.0907L13.8379 14.243C13.6303 14.4552 13.2938 14.4552 13.0863 14.243C12.8787 14.0309 12.8787 13.6871 13.0863 13.4751L14.2137 12.3228L13.0863 11.171C12.8787 10.9589 12.8787 10.615 13.0863 10.4031C13.2938 10.1911 13.6304 10.1911 13.8379 10.4031ZM11.0799 6.0002L11.2333 6.01004C11.5407 6.04488 11.8315 6.17036 12.0702 6.37118L12.1847 6.47724L12.3708 6.66749C12.5785 6.87962 12.5785 7.22344 12.3708 7.43558C12.1632 7.64771 11.8268 7.64771 11.6193 7.43558L11.4331 7.24534C11.3478 7.15817 11.236 7.10324 11.1161 7.08955C10.8568 7.06002 10.6203 7.2265 10.5483 7.47325L10.5292 7.56931L10.3451 9.2584H11C11.2935 9.2584 11.5315 9.50159 11.5315 9.80146C11.5315 10.1013 11.2935 10.3445 11 10.3445H10.2271L9.87861 13.5505C9.85789 13.7415 9.80418 13.9272 9.72001 14.0991C9.34931 14.8565 8.4792 15.19 7.72154 14.8911L7.58086 14.8277L7.29387 14.681C7.0313 14.547 6.925 14.2206 7.05621 13.9525C7.18741 13.6842 7.50679 13.5756 7.7692 13.7096L8.05619 13.8563C8.31877 13.9903 8.63798 13.8817 8.76918 13.6134L8.80356 13.5243L8.822 13.4305L9.15748 10.3445H8C7.70653 10.3445 7.46854 10.1013 7.46854 9.80146C7.46854 9.50159 7.70653 9.2584 8 9.2584H9.27573L9.47254 7.44949C9.56422 6.60775 10.2679 5.9873 11.0799 6.0002Z" fill="#91D62A"/>
                    </svg>
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">Dinput函数库</span>
                    <span className="compat-setting-desc">决定dinput.dll和dinput8.dll优先使用游戏自带或wine内置版本</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="survey-section">
        <h2 className="survey-title">点击参与调研问卷</h2>
        <p className="survey-desc">下载体验盖世游戏 Mac 客户端，选择 Steam 下载或本地导入的方式游玩游戏。为了获取更真实的体验数据，<span className="survey-desc-bold">建议累计游玩时长 &gt; 20 分钟后再提交反馈。</span><br/>本次问卷预计需要 3 分钟，感谢您的参与！</p>
        <div className="survey-btn">
          <svg className="survey-btn-bg" xmlns="http://www.w3.org/2000/svg" width="168" height="42" viewBox="0 0 168 42" fill="none">
            <mask id="mask0_21_458" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="169" height="42">
              <rect width="168.34" height="42" fill="white"/>
            </mask>
            <g mask="url(#mask0_21_458)">
              <rect width="168.34" height="42" rx="21" fill="url(#paint0_linear_21_458)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_21_458" x1="-0.00166835" y1="20.9678" x2="168.342" y2="20.9812" gradientUnits="userSpaceOnUse">
                <stop offset="0.0001" stopColor="#B2FCFF" stopOpacity="0.24"/>
                <stop offset="0.5001" stopColor="#74D3FF" stopOpacity="0.24"/>
                <stop offset="1" stopColor="#5B63FF" stopOpacity="0.24"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="survey-btn-text">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
              <path d="M9 6.5C9 6.32741 8.86009 6.1875 8.6875 6.1875C7.65196 6.1875 6.8125 5.34804 6.8125 4.3125C6.8125 4.13991 6.67259 4 6.5 4C6.32741 4 6.1875 4.13991 6.1875 4.3125C6.1875 5.34804 5.34804 6.1875 4.3125 6.1875C4.13991 6.1875 4 6.32741 4 6.5C4 6.67259 4.13991 6.8125 4.3125 6.8125C5.34804 6.8125 6.1875 7.65196 6.1875 8.6875C6.1875 8.86009 6.32741 9 6.5 9C6.67259 9 6.8125 8.86009 6.8125 8.6875C6.8125 7.65196 7.65196 6.8125 8.6875 6.8125C8.86009 6.8125 9 6.67259 9 6.5Z" fill="url(#si_g0)" style={{mixBlendMode:'screen'}}/>
              <path d="M9 6.5C9 6.32741 8.86009 6.1875 8.6875 6.1875C7.65196 6.1875 6.8125 5.34804 6.8125 4.3125C6.8125 4.13991 6.67259 4 6.5 4C6.32741 4 6.1875 4.13991 6.1875 4.3125C6.1875 5.34804 5.34804 6.1875 4.3125 6.1875C4.13991 6.1875 4 6.32741 4 6.5C4 6.67259 4.13991 6.8125 4.3125 6.8125C5.34804 6.8125 6.1875 7.65196 6.1875 8.6875C6.1875 8.86009 6.32741 9 6.5 9C6.67259 9 6.8125 8.86009 6.8125 8.6875C6.8125 7.65196 7.65196 6.8125 8.6875 6.8125C8.86009 6.8125 9 6.67259 9 6.5Z" fill="white" fillOpacity="0.5"/>
              <path d="M16.5 6C16.5 5.72386 16.2761 5.5 16 5.5C15.7239 5.5 15.5 5.72386 15.5 6C15.5 8.48488 13.4852 10.5 11 10.5C10.7239 10.5 10.5 10.7239 10.5 11C10.5 11.2761 10.7239 11.5 11 11.5C13.4853 11.5 15.5 13.5142 15.5 16C15.5 16.2761 15.7239 16.5 16 16.5C16.2761 16.5 16.5 16.2761 16.5 16C16.5 13.5141 18.5141 11.5 21 11.5C21.2761 11.5 21.5 11.2761 21.5 11C21.5 10.7239 21.2761 10.5 21 10.5C18.5142 10.5 16.5 8.48492 16.5 6Z" fill="url(#si_g1)" style={{mixBlendMode:'screen'}}/>
              <path d="M16.5 6C16.5 5.72386 16.2761 5.5 16 5.5C15.7239 5.5 15.5 5.72386 15.5 6C15.5 8.48488 13.4852 10.5 11 10.5C10.7239 10.5 10.5 10.7239 10.5 11C10.5 11.2761 10.7239 11.5 11 11.5C13.4853 11.5 15.5 13.5142 15.5 16C15.5 16.2761 15.7239 16.5 16 16.5C16.2761 16.5 16.5 16.2761 16.5 16C16.5 13.5141 18.5141 11.5 21 11.5C21.2761 11.5 21.5 11.2761 21.5 11C21.5 10.7239 21.2761 10.5 21 10.5C18.5142 10.5 16.5 8.48492 16.5 6Z" fill="white" fillOpacity="0.5"/>
              <path d="M7.5 12.5C7.5 12.2239 7.27614 12 7 12C6.72386 12 6.5 12.2239 6.5 12.5C6.5 14.1569 5.15686 15.5 3.5 15.5C3.22386 15.5 3 15.7239 3 16C3 16.2761 3.22386 16.5 3.5 16.5C5.15686 16.5 6.5 17.8431 6.5 19.5C6.5 19.7761 6.72386 20 7 20C7.27614 20 7.5 19.7761 7.5 19.5C7.5 17.8431 8.84314 16.5 10.5 16.5C10.7761 16.5 11 16.2761 11 16C11 15.7239 10.7761 15.5 10.5 15.5C8.84314 15.5 7.5 14.1569 7.5 12.5Z" fill="url(#si_g2)" style={{mixBlendMode:'screen'}}/>
              <path d="M7.5 12.5C7.5 12.2239 7.27614 12 7 12C6.72386 12 6.5 12.2239 6.5 12.5C6.5 14.1569 5.15686 15.5 3.5 15.5C3.22386 15.5 3 15.7239 3 16C3 16.2761 3.22386 16.5 3.5 16.5C5.15686 16.5 6.5 17.8431 6.5 19.5C6.5 19.7761 6.72386 20 7 20C7.27614 20 7.5 19.7761 7.5 19.5C7.5 17.8431 8.84314 16.5 10.5 16.5C10.7761 16.5 11 16.2761 11 16C11 15.7239 10.7761 15.5 10.5 15.5C8.84314 15.5 7.5 14.1569 7.5 12.5Z" fill="white" fillOpacity="0.5"/>
              <defs>
                <linearGradient id="si_g0" x1="3" y1="20" x2="21.5" y2="20.0025" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E59CFF"/>
                  <stop offset="0.5" stopColor="#BA9CFF"/>
                  <stop offset="1" stopColor="#9CB2FF"/>
                </linearGradient>
                <linearGradient id="si_g1" x1="3" y1="20" x2="21.5" y2="20.0025" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E59CFF"/>
                  <stop offset="0.5" stopColor="#BA9CFF"/>
                  <stop offset="1" stopColor="#9CB2FF"/>
                </linearGradient>
                <linearGradient id="si_g2" x1="3" y1="20" x2="21.5" y2="20.0025" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#E59CFF"/>
                  <stop offset="0.5" stopColor="#BA9CFF"/>
                  <stop offset="1" stopColor="#9CB2FF"/>
                </linearGradient>
              </defs>
            </svg>
            点击填写问卷
          </span>
        </div>
        <div className="survey-glow-wrapper">
          <div className="survey-particles">
            <svg width="1134" height="500" viewBox="0 0 1134 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="180" cy="120" r="1.5" fill="white"/>
              <circle cx="320" cy="80" r="1" fill="white"/>
              <circle cx="450" cy="160" r="1.2" fill="white"/>
              <circle cx="560" cy="60" r="1" fill="white"/>
              <circle cx="670" cy="140" r="1.5" fill="white"/>
              <circle cx="780" cy="90" r="1" fill="white"/>
              <circle cx="890" cy="170" r="1.3" fill="white"/>
              <circle cx="950" cy="110" r="1" fill="white"/>
              <circle cx="250" cy="200" r="1" fill="white"/>
              <circle cx="400" cy="240" r="1.5" fill="white"/>
              <circle cx="520" cy="210" r="1" fill="white"/>
              <circle cx="640" cy="260" r="1.2" fill="white"/>
              <circle cx="750" cy="220" r="1" fill="white"/>
              <circle cx="860" cy="280" r="1.5" fill="white"/>
              <circle cx="150" cy="300" r="1" fill="white"/>
              <circle cx="300" cy="320" r="1.3" fill="white"/>
              <circle cx="470" cy="340" r="1" fill="white"/>
              <circle cx="600" cy="360" r="1.5" fill="white"/>
              <circle cx="720" cy="330" r="1" fill="white"/>
              <circle cx="830" cy="370" r="1.2" fill="white"/>
              <circle cx="960" cy="300" r="1" fill="white"/>
              <circle cx="1020" cy="250" r="1.5" fill="white"/>
              <circle cx="100" cy="180" r="1" fill="white"/>
              <circle cx="210" cy="280" r="1.2" fill="white"/>
              <circle cx="370" cy="150" r="1" fill="white"/>
              <circle cx="500" cy="300" r="1.5" fill="white"/>
              <circle cx="690" cy="50" r="1" fill="white"/>
              <circle cx="810" cy="350" r="1" fill="white"/>
              <circle cx="1050" cy="180" r="1.3" fill="white"/>
              <circle cx="1080" cy="320" r="1" fill="white"/>
              <circle cx="130" cy="400" r="1" fill="white"/>
              <circle cx="350" cy="420" r="1.2" fill="white"/>
              <circle cx="550" cy="440" r="1" fill="white"/>
              <circle cx="700" cy="410" r="1.5" fill="white"/>
              <circle cx="900" cy="430" r="1" fill="white"/>
              <circle cx="1000" cy="400" r="1.2" fill="white"/>
            </svg>
          </div>
          <svg className="survey-glow" width="1134" height="539" viewBox="0 0 1134 539" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_18_1030" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="1134" height="539">
          <path d="M567 539C880.145 539 1134 297.681 1134 0L-1.39143e-05 -9.91374e-05C-3.99384e-05 297.681 253.854 539 567 539Z" fill="#09090B"/>
          </mask>
          <g mask="url(#mask0_18_1030)">
          <g opacity="0.2" filter="url(#filter0_f_18_1030)">
          <path fillRule="evenodd" clipRule="evenodd" d="M567 571C283.378 571 48.3962 373.04 6.60813 114.539C126.944 288.383 333.003 403 567 403C800.996 403 1007.06 288.384 1127.39 114.54C1085.6 373.04 850.621 571 567 571Z" fill="#B2FCFF"/>
          </g>
          <g opacity="0.5" filter="url(#filter1_f_18_1030)">
          <path fillRule="evenodd" clipRule="evenodd" d="M567 571C321.18 571 111.898 422.293 33.2696 214.349C156.088 367.951 349.474 467 567 467C784.527 467 977.912 367.951 1100.73 214.349C1022.1 422.293 812.82 571 567 571Z" fill="#B2FCFF"/>
          </g>
          <g filter="url(#filter2_f_18_1030)">
          <path fillRule="evenodd" clipRule="evenodd" d="M567 571C368.29 571 193.457 473.828 92.2105 326.745C213.788 443.069 381.628 515 567 515C752.371 515 920.212 443.069 1041.79 326.745C940.543 473.828 765.709 571 567 571Z" fill="white"/>
          </g>
          <mask id="mask1_18_1030" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="136" y="-232" width="977" height="1297">
          <rect width="994.46" height="731.154" transform="matrix(0.808282 0.588795 -0.235961 0.971762 308.524 -232)" fill="url(#paint0_radial_18_1030)"/>
          </mask>
          <g mask="url(#mask1_18_1030)">
          </g>
          <g clipPath="url(#clip0_18_1030)">
          <g opacity="0.7">
          <path opacity="0.11" d="M389.517 454.687C390.102 454.709 390.416 454.106 390.219 453.34C390.022 452.574 389.388 451.934 388.803 451.912C388.217 451.89 387.903 452.493 388.1 453.26C388.297 454.026 388.931 454.665 389.517 454.687Z" fill="white"/>
          <path d="M394.917 462.443C395.356 462.46 395.592 462.008 395.444 461.433C395.296 460.858 394.82 460.379 394.382 460.363C393.943 460.346 393.707 460.798 393.855 461.373C394.003 461.947 394.478 462.427 394.917 462.443Z" fill="white"/>
          <path d="M408.649 448.546C409.088 448.562 409.323 448.11 409.176 447.536C409.028 446.961 408.552 446.482 408.114 446.465C407.675 446.449 407.439 446.901 407.587 447.475C407.735 448.05 408.21 448.529 408.649 448.546Z" fill="white"/>
          <path d="M363.279 445.451C363.717 445.467 363.953 445.015 363.805 444.44C363.658 443.866 363.182 443.387 362.743 443.37C362.305 443.353 362.069 443.806 362.217 444.38C362.364 444.955 362.84 445.434 363.279 445.451Z" fill="white"/>
          <path opacity="0.11" d="M341.345 461.102C341.931 461.124 342.245 460.521 342.048 459.754C341.851 458.988 341.217 458.349 340.631 458.327C340.046 458.305 339.732 458.908 339.929 459.674C340.126 460.44 340.76 461.08 341.345 461.102Z" fill="white"/>
          <path d="M327.362 445.464C327.654 445.475 327.811 445.174 327.713 444.791C327.614 444.408 327.298 444.089 327.005 444.078C326.713 444.067 326.556 444.368 326.654 444.751C326.753 445.134 327.07 445.453 327.362 445.464Z" fill="white"/>
          <path d="M394.882 481.67C395.174 481.681 395.331 481.379 395.233 480.996C395.134 480.614 394.817 480.294 394.525 480.283C394.233 480.272 394.076 480.574 394.174 480.956C394.273 481.339 394.589 481.659 394.882 481.67Z" fill="white"/>
          <path d="M510.329 486.047C510.622 486.058 510.779 485.757 510.68 485.374C510.582 484.991 510.265 484.672 509.973 484.661C509.68 484.65 509.523 484.951 509.622 485.334C509.72 485.717 510.037 486.036 510.329 486.047Z" fill="white"/>
          <path d="M558.413 450.781C558.705 450.792 558.862 450.491 558.763 450.108C558.665 449.725 558.348 449.406 558.056 449.395C557.764 449.384 557.606 449.685 557.705 450.068C557.803 450.451 558.12 450.77 558.413 450.781Z" fill="white"/>
          <path d="M592.095 502.191C592.387 502.202 592.544 501.901 592.446 501.518C592.347 501.135 592.03 500.816 591.738 500.805C591.446 500.794 591.289 501.095 591.387 501.478C591.486 501.861 591.802 502.18 592.095 502.191Z" fill="white"/>
          <path d="M214.078 457.653C214.37 457.664 214.527 457.363 214.429 456.98C214.33 456.597 214.014 456.278 213.721 456.267C213.429 456.256 213.272 456.557 213.37 456.94C213.469 457.323 213.786 457.642 214.078 457.653Z" fill="white"/>
          <path opacity="0.11" d="M196.504 419.905C196.797 419.916 196.954 419.615 196.855 419.232C196.757 418.849 196.44 418.53 196.148 418.519C195.855 418.508 195.698 418.809 195.797 419.192C195.895 419.575 196.212 419.894 196.504 419.905Z" fill="white"/>
          <path opacity="0.11" d="M177.84 434.994C178.132 435.005 178.289 434.704 178.191 434.321C178.092 433.938 177.776 433.619 177.483 433.608C177.191 433.597 177.034 433.898 177.132 434.281C177.231 434.664 177.548 434.983 177.84 434.994Z" fill="white"/>
          <path opacity="0.11" d="M206.019 477.265C206.312 477.276 206.469 476.975 206.37 476.592C206.272 476.209 205.955 475.89 205.663 475.879C205.37 475.868 205.213 476.169 205.312 476.552C205.41 476.935 205.727 477.254 206.019 477.265Z" fill="white"/>
          <path opacity="0.11" d="M324.911 454.295C325.203 454.307 325.36 454.005 325.262 453.622C325.163 453.24 324.847 452.92 324.554 452.909C324.262 452.898 324.105 453.199 324.203 453.582C324.302 453.965 324.619 454.284 324.911 454.295Z" fill="white"/>
          <path opacity="0.11" d="M400.254 506.601C400.546 506.612 400.703 506.311 400.605 505.928C400.506 505.545 400.189 505.226 399.897 505.215C399.605 505.204 399.447 505.505 399.546 505.888C399.644 506.271 399.961 506.59 400.254 506.601Z" fill="white"/>
          <path opacity="0.11" d="M500.138 503.513C500.43 503.524 500.587 503.223 500.489 502.84C500.39 502.457 500.074 502.138 499.781 502.127C499.489 502.116 499.332 502.417 499.43 502.8C499.529 503.183 499.846 503.502 500.138 503.513Z" fill="white"/>
          <path opacity="0.3" d="M233.98 441.239C234.272 441.25 234.43 440.949 234.331 440.566C234.233 440.183 233.916 439.864 233.623 439.853C233.331 439.842 233.174 440.143 233.272 440.526C233.371 440.909 233.688 441.228 233.98 441.239Z" fill="white"/>
          <path d="M346.141 408.403C346.433 408.414 346.59 408.113 346.492 407.73C346.393 407.347 346.076 407.028 345.784 407.017C345.492 407.006 345.334 407.307 345.433 407.69C345.531 408.073 345.848 408.392 346.141 408.403Z" fill="white"/>
          <path d="M427.336 410.107C427.628 410.118 427.785 409.817 427.687 409.434C427.588 409.051 427.271 408.732 426.979 408.721C426.687 408.71 426.53 409.011 426.628 409.394C426.727 409.777 427.043 410.096 427.336 410.107Z" fill="white"/>
          <path d="M326.547 470.841C326.84 470.852 326.997 470.551 326.898 470.168C326.8 469.785 326.483 469.466 326.191 469.455C325.898 469.444 325.741 469.745 325.84 470.128C325.938 470.511 326.255 470.83 326.547 470.841Z" fill="white"/>
          <path opacity="0.3" d="M289.478 469.439C289.77 469.45 289.927 469.148 289.829 468.765C289.73 468.383 289.413 468.063 289.121 468.052C288.829 468.041 288.672 468.343 288.77 468.725C288.869 469.108 289.185 469.427 289.478 469.439Z" fill="white"/>
          <path opacity="0.11" d="M234.998 424.798C235.29 424.809 235.447 424.507 235.349 424.124C235.25 423.742 234.933 423.422 234.641 423.411C234.349 423.4 234.191 423.701 234.29 424.084C234.388 424.467 234.705 424.786 234.998 424.798Z" fill="white"/>
          <path opacity="0.3" d="M359.961 425.412C360.253 425.423 360.41 425.121 360.312 424.739C360.213 424.356 359.897 424.036 359.604 424.025C359.312 424.014 359.155 424.316 359.253 424.699C359.352 425.081 359.669 425.401 359.961 425.412Z" fill="white"/>
          <path opacity="0.3" d="M338.943 484.361C339.235 484.373 339.392 484.071 339.294 483.688C339.195 483.305 338.879 482.986 338.586 482.975C338.294 482.964 338.137 483.265 338.235 483.648C338.334 484.031 338.651 484.35 338.943 484.361Z" fill="white"/>
          <path opacity="0.3" d="M276.649 488.867C276.941 488.878 277.099 488.577 277 488.194C276.902 487.811 276.585 487.492 276.292 487.48C276 487.469 275.843 487.771 275.941 488.154C276.04 488.536 276.357 488.856 276.649 488.867Z" fill="white"/>
          <path opacity="0.3" d="M249.34 441.824C249.632 441.835 249.789 441.534 249.691 441.151C249.592 440.768 249.275 440.449 248.983 440.438C248.691 440.427 248.534 440.728 248.632 441.111C248.731 441.494 249.047 441.813 249.34 441.824Z" fill="white"/>
          <path opacity="0.3" d="M578.184 452.219C578.476 452.23 578.633 451.929 578.535 451.546C578.436 451.163 578.12 450.844 577.827 450.833C577.535 450.822 577.378 451.123 577.476 451.506C577.575 451.889 577.892 452.208 578.184 452.219Z" fill="white"/>
          <path opacity="0.11" d="M485.61 420.553C485.902 420.564 486.059 420.263 485.96 419.88C485.862 419.497 485.545 419.178 485.253 419.167C484.96 419.156 484.803 419.457 484.902 419.84C485 420.223 485.317 420.542 485.61 420.553Z" fill="white"/>
          <path opacity="0.11" d="M571.559 481.495C571.852 481.506 572.009 481.204 571.91 480.822C571.812 480.439 571.495 480.119 571.203 480.108C570.91 480.097 570.753 480.399 570.852 480.782C570.95 481.164 571.267 481.484 571.559 481.495Z" fill="white"/>
          <path opacity="0.3" d="M439.186 482.663C439.771 482.686 440.085 482.082 439.888 481.316C439.691 480.55 439.057 479.91 438.472 479.888C437.886 479.866 437.572 480.469 437.769 481.236C437.966 482.002 438.6 482.641 439.186 482.663Z" fill="white"/>
          <path opacity="0.11" d="M465.08 463.044C465.665 463.066 465.979 462.463 465.782 461.697C465.585 460.93 464.951 460.291 464.366 460.269C463.781 460.247 463.466 460.85 463.663 461.617C463.86 462.383 464.495 463.022 465.08 463.044Z" fill="white"/>
          <path d="M458.571 438.763C459.01 438.779 459.246 438.327 459.098 437.752C458.95 437.178 458.475 436.699 458.036 436.682C457.597 436.665 457.361 437.118 457.509 437.692C457.657 438.267 458.133 438.746 458.571 438.763Z" fill="white"/>
          <path d="M440.769 510.197C441.208 510.213 441.443 509.761 441.296 509.186C441.148 508.612 440.672 508.133 440.233 508.116C439.795 508.099 439.559 508.552 439.707 509.126C439.855 509.701 440.33 510.18 440.769 510.197Z" fill="white"/>
          <path d="M620.148 530.725C620.587 530.741 620.822 530.289 620.675 529.714C620.527 529.14 620.051 528.66 619.613 528.644C619.174 528.627 618.938 529.08 619.086 529.654C619.234 530.229 619.709 530.708 620.148 530.725Z" fill="white"/>
          <path d="M273.429 505.913C273.868 505.93 274.104 505.477 273.956 504.903C273.808 504.328 273.333 503.849 272.894 503.832C272.455 503.816 272.219 504.268 272.367 504.843C272.515 505.417 272.991 505.896 273.429 505.913Z" fill="white"/>
          <path d="M198.899 487.298C199.338 487.314 199.574 486.862 199.426 486.288C199.278 485.713 198.803 485.234 198.364 485.217C197.925 485.2 197.69 485.653 197.837 486.227C197.985 486.802 198.461 487.281 198.899 487.298Z" fill="white"/>
          <path d="M182.759 459.217C183.198 459.233 183.434 458.781 183.286 458.207C183.138 457.632 182.662 457.153 182.224 457.136C181.785 457.119 181.549 457.572 181.697 458.146C181.845 458.721 182.32 459.2 182.759 459.217Z" fill="white"/>
          <path d="M436.724 451.671C437.162 451.687 437.398 451.235 437.25 450.661C437.103 450.086 436.627 449.607 436.188 449.59C435.75 449.574 435.514 450.026 435.662 450.6C435.809 451.175 436.285 451.654 436.724 451.671Z" fill="white"/>
          <path d="M357.783 499.498C358.221 499.514 358.457 499.062 358.309 498.487C358.161 497.913 357.686 497.433 357.247 497.417C356.808 497.4 356.573 497.853 356.72 498.427C356.868 499.002 357.344 499.481 357.783 499.498Z" fill="white"/>
          <path d="M498.904 534.374C499.343 534.391 499.579 533.939 499.431 533.364C499.283 532.79 498.807 532.31 498.369 532.294C497.93 532.277 497.694 532.729 497.842 533.304C497.99 533.879 498.465 534.358 498.904 534.374Z" fill="white"/>
          <path d="M627.1 492.529C627.538 492.546 627.774 492.094 627.626 491.519C627.479 490.944 627.003 490.465 626.564 490.449C626.126 490.432 625.89 490.884 626.038 491.459C626.185 492.033 626.661 492.513 627.1 492.529Z" fill="white"/>
          <path d="M629.997 454.87C630.436 454.886 630.672 454.434 630.524 453.859C630.376 453.285 629.901 452.805 629.462 452.789C629.023 452.772 628.787 453.225 628.935 453.799C629.083 454.374 629.558 454.853 629.997 454.87Z" fill="white"/>
          <path opacity="0.3" d="M502.441 441.112C503.026 441.134 503.341 440.531 503.143 439.765C502.946 438.998 502.312 438.359 501.727 438.337C501.142 438.315 500.827 438.918 501.024 439.684C501.222 440.451 501.856 441.09 502.441 441.112Z" fill="white"/>
          <path d="M489.768 391.872C490.353 391.894 490.668 391.291 490.471 390.525C490.274 389.759 489.639 389.119 489.054 389.097C488.469 389.075 488.155 389.678 488.352 390.445C488.549 391.211 489.183 391.85 489.768 391.872Z" fill="white"/>
          <path d="M533.638 457.401C534.076 457.418 534.312 456.966 534.164 456.391C534.017 455.816 533.541 455.337 533.102 455.321C532.664 455.304 532.428 455.756 532.576 456.331C532.723 456.905 533.199 457.385 533.638 457.401Z" fill="white"/>
          <path opacity="0.3" d="M552.363 431.329C552.949 431.351 553.263 430.748 553.066 429.981C552.869 429.215 552.235 428.576 551.649 428.554C551.064 428.532 550.75 429.135 550.947 429.901C551.144 430.667 551.778 431.307 552.363 431.329Z" fill="white"/>
          <path opacity="0.3" d="M617.458 482.552C618.043 482.575 618.358 481.971 618.161 481.205C617.964 480.439 617.329 479.8 616.744 479.777C616.159 479.755 615.844 480.359 616.042 481.125C616.239 481.891 616.873 482.53 617.458 482.552Z" fill="white"/>
          <path opacity="0.3" d="M555.855 481.59C556.44 481.612 556.755 481.009 556.557 480.243C556.36 479.476 555.726 478.837 555.141 478.815C554.556 478.793 554.241 479.396 554.438 480.162C554.636 480.929 555.27 481.568 555.855 481.59Z" fill="white"/>
          <path opacity="0.3" d="M254.923 481.864C255.508 481.886 255.823 481.283 255.626 480.517C255.428 479.75 254.794 479.111 254.209 479.089C253.624 479.067 253.309 479.67 253.506 480.436C253.704 481.203 254.338 481.842 254.923 481.864Z" fill="white"/>
          <path opacity="0.3" d="M202.21 442.095C202.795 442.117 203.11 441.514 202.913 440.748C202.715 439.981 202.081 439.342 201.496 439.32C200.911 439.298 200.596 439.901 200.794 440.667C200.991 441.434 201.625 442.073 202.21 442.095Z" fill="white"/>
          <path opacity="0.11" d="M590.392 460.925C590.978 460.947 591.292 460.344 591.095 459.578C590.898 458.811 590.264 458.172 589.678 458.15C589.093 458.128 588.779 458.731 588.976 459.497C589.173 460.264 589.807 460.903 590.392 460.925Z" fill="white"/>
          <path opacity="0.3" d="M271.871 421.387C272.456 421.409 272.771 420.806 272.574 420.04C272.377 419.273 271.742 418.634 271.157 418.612C270.572 418.59 270.257 419.193 270.455 419.959C270.652 420.726 271.286 421.365 271.871 421.387Z" fill="white"/>
          <path opacity="0.11" d="M254.005 406.976C254.59 406.998 254.905 406.395 254.707 405.628C254.51 404.862 253.876 404.223 253.291 404.201C252.706 404.179 252.391 404.782 252.588 405.548C252.785 406.314 253.42 406.954 254.005 406.976Z" fill="white"/>
          <path opacity="0.3" d="M261.19 451.2C261.776 451.222 262.09 450.619 261.893 449.853C261.696 449.086 261.062 448.447 260.476 448.425C259.891 448.403 259.577 449.006 259.774 449.772C259.971 450.539 260.605 451.178 261.19 451.2Z" fill="white"/>
          <path d="M294.105 451.758C294.543 451.774 294.779 451.322 294.631 450.747C294.484 450.173 294.008 449.694 293.569 449.677C293.131 449.66 292.895 450.113 293.043 450.687C293.19 451.262 293.666 451.741 294.105 451.758Z" fill="white"/>
          <path opacity="0.11" d="M518.161 249.845C518.746 249.867 519.061 249.264 518.863 248.498C518.666 247.731 518.032 247.092 517.447 247.07C516.862 247.048 516.547 247.651 516.744 248.417C516.942 249.184 517.576 249.823 518.161 249.845Z" fill="white"/>
          <path d="M523.563 257.603C524.001 257.62 524.237 257.168 524.089 256.593C523.942 256.019 523.466 255.539 523.027 255.523C522.589 255.506 522.353 255.958 522.501 256.533C522.648 257.108 523.124 257.587 523.563 257.603Z" fill="white"/>
          <path d="M537.294 243.705C537.733 243.721 537.969 243.269 537.821 242.694C537.673 242.12 537.197 241.64 536.759 241.624C536.32 241.607 536.084 242.06 536.232 242.634C536.38 243.209 536.855 243.688 537.294 243.705Z" fill="white"/>
          <path d="M491.923 240.609C492.361 240.625 492.597 240.173 492.449 239.599C492.301 239.024 491.826 238.545 491.387 238.528C490.948 238.512 490.713 238.964 490.86 239.538C491.008 240.113 491.484 240.592 491.923 240.609Z" fill="white"/>
          <path opacity="0.11" d="M469.99 256.26C470.575 256.282 470.89 255.678 470.692 254.912C470.495 254.146 469.861 253.507 469.276 253.484C468.691 253.462 468.376 254.066 468.573 254.832C468.77 255.598 469.405 256.237 469.99 256.26Z" fill="white"/>
          <path d="M456.006 240.623C456.298 240.634 456.455 240.333 456.357 239.95C456.258 239.567 455.941 239.248 455.649 239.237C455.357 239.226 455.199 239.527 455.298 239.91C455.396 240.293 455.713 240.612 456.006 240.623Z" fill="white"/>
          <path d="M523.526 276.829C523.818 276.84 523.975 276.538 523.877 276.156C523.778 275.773 523.461 275.453 523.169 275.442C522.877 275.431 522.72 275.733 522.818 276.116C522.917 276.498 523.234 276.818 523.526 276.829Z" fill="white"/>
          <path d="M638.973 281.206C639.265 281.217 639.423 280.916 639.324 280.533C639.226 280.15 638.909 279.831 638.616 279.82C638.324 279.809 638.167 280.11 638.265 280.493C638.364 280.876 638.681 281.195 638.973 281.206Z" fill="white"/>
          <path d="M687.057 245.941C687.349 245.952 687.507 245.65 687.408 245.267C687.31 244.885 686.993 244.565 686.7 244.554C686.408 244.543 686.251 244.845 686.349 245.227C686.448 245.61 686.765 245.929 687.057 245.941Z" fill="white"/>
          <path d="M720.738 297.352C721.03 297.363 721.187 297.061 721.089 296.679C720.99 296.296 720.674 295.976 720.381 295.965C720.089 295.954 719.932 296.256 720.03 296.638C720.129 297.021 720.446 297.341 720.738 297.352Z" fill="white"/>
          <path d="M342.723 252.812C343.016 252.823 343.173 252.522 343.074 252.139C342.976 251.756 342.659 251.437 342.367 251.426C342.074 251.415 341.917 251.716 342.016 252.099C342.114 252.482 342.431 252.801 342.723 252.812Z" fill="white"/>
          <path opacity="0.11" d="M325.149 215.064C325.441 215.075 325.598 214.773 325.499 214.39C325.401 214.008 325.084 213.688 324.792 213.677C324.499 213.666 324.342 213.968 324.441 214.35C324.539 214.733 324.856 215.053 325.149 215.064Z" fill="white"/>
          <path opacity="0.11" d="M306.483 230.152C306.776 230.164 306.933 229.862 306.834 229.479C306.736 229.097 306.419 228.777 306.127 228.766C305.834 228.755 305.677 229.056 305.776 229.439C305.874 229.822 306.191 230.141 306.483 230.152Z" fill="white"/>
          <path opacity="0.11" d="M334.663 272.424C334.956 272.435 335.113 272.134 335.014 271.751C334.916 271.369 334.599 271.049 334.307 271.038C334.014 271.027 333.857 271.328 333.956 271.711C334.054 272.094 334.371 272.413 334.663 272.424Z" fill="white"/>
          <path opacity="0.11" d="M453.556 249.454C453.848 249.465 454.006 249.164 453.907 248.781C453.809 248.398 453.492 248.079 453.199 248.068C452.907 248.057 452.75 248.358 452.848 248.741C452.947 249.124 453.264 249.443 453.556 249.454Z" fill="white"/>
          <path opacity="0.11" d="M528.897 301.759C529.189 301.77 529.346 301.469 529.248 301.086C529.149 300.703 528.833 300.384 528.54 300.373C528.248 300.362 528.091 300.663 528.189 301.046C528.288 301.429 528.605 301.748 528.897 301.759Z" fill="white"/>
          <path opacity="0.11" d="M628.783 298.672C629.075 298.683 629.232 298.382 629.134 297.999C629.035 297.616 628.718 297.297 628.426 297.286C628.134 297.275 627.977 297.576 628.075 297.959C628.174 298.342 628.49 298.661 628.783 298.672Z" fill="white"/>
          <path opacity="0.3" d="M362.624 236.398C362.916 236.409 363.074 236.107 362.975 235.724C362.877 235.342 362.56 235.022 362.267 235.011C361.975 235 361.818 235.302 361.916 235.684C362.015 236.067 362.332 236.387 362.624 236.398Z" fill="white"/>
          <path d="M474.786 203.562C475.078 203.573 475.235 203.271 475.137 202.889C475.038 202.506 474.722 202.186 474.429 202.175C474.137 202.164 473.98 202.466 474.078 202.848C474.177 203.231 474.494 203.551 474.786 203.562Z" fill="white"/>
          <path d="M555.98 205.265C556.273 205.276 556.43 204.974 556.331 204.592C556.233 204.209 555.916 203.89 555.624 203.878C555.331 203.867 555.174 204.169 555.273 204.552C555.371 204.934 555.688 205.254 555.98 205.265Z" fill="white"/>
          <path d="M455.192 266.001C455.484 266.012 455.641 265.71 455.543 265.327C455.444 264.945 455.128 264.625 454.835 264.614C454.543 264.603 454.386 264.905 454.484 265.287C454.583 265.67 454.9 265.99 455.192 266.001Z" fill="white"/>
          <path opacity="0.3" d="M418.122 264.596C418.415 264.607 418.572 264.306 418.473 263.923C418.375 263.54 418.058 263.221 417.766 263.21C417.473 263.199 417.316 263.5 417.415 263.883C417.513 264.266 417.83 264.585 418.122 264.596Z" fill="white"/>
          <path opacity="0.11" d="M363.641 219.957C363.934 219.968 364.091 219.667 363.992 219.284C363.894 218.901 363.577 218.582 363.285 218.571C362.992 218.56 362.835 218.861 362.934 219.244C363.032 219.627 363.349 219.946 363.641 219.957Z" fill="white"/>
          <path opacity="0.3" d="M488.606 220.569C488.898 220.581 489.055 220.279 488.956 219.896C488.858 219.514 488.541 219.194 488.249 219.183C487.957 219.172 487.799 219.473 487.898 219.856C487.996 220.239 488.313 220.558 488.606 220.569Z" fill="white"/>
          <path opacity="0.3" d="M467.588 279.52C467.881 279.531 468.038 279.23 467.939 278.847C467.841 278.464 467.524 278.145 467.232 278.134C466.939 278.123 466.782 278.424 466.881 278.807C466.979 279.19 467.296 279.509 467.588 279.52Z" fill="white"/>
          <path opacity="0.3" d="M405.294 284.026C405.586 284.037 405.743 283.736 405.645 283.353C405.546 282.97 405.229 282.651 404.937 282.64C404.645 282.629 404.487 282.93 404.586 283.313C404.684 283.696 405.001 284.015 405.294 284.026Z" fill="white"/>
          <path opacity="0.3" d="M377.984 236.984C378.276 236.995 378.433 236.693 378.335 236.31C378.236 235.928 377.919 235.608 377.627 235.597C377.335 235.586 377.178 235.887 377.276 236.27C377.375 236.653 377.692 236.972 377.984 236.984Z" fill="white"/>
          <path opacity="0.3" d="M706.829 247.378C707.121 247.389 707.278 247.087 707.18 246.704C707.081 246.322 706.764 246.002 706.472 245.991C706.18 245.98 706.023 246.282 706.121 246.664C706.22 247.047 706.536 247.366 706.829 247.378Z" fill="white"/>
          <path opacity="0.11" d="M614.254 215.714C614.546 215.725 614.703 215.423 614.605 215.04C614.506 214.658 614.19 214.338 613.897 214.327C613.605 214.316 613.448 214.617 613.546 215C613.645 215.383 613.962 215.702 614.254 215.714Z" fill="white"/>
          <path opacity="0.11" d="M700.203 276.654C700.495 276.665 700.652 276.364 700.554 275.981C700.455 275.598 700.138 275.279 699.846 275.268C699.554 275.257 699.396 275.558 699.495 275.941C699.593 276.324 699.91 276.643 700.203 276.654Z" fill="white"/>
          <path opacity="0.3" d="M567.831 277.822C568.416 277.845 568.73 277.241 568.533 276.475C568.336 275.709 567.702 275.07 567.117 275.047C566.532 275.025 566.217 275.629 566.414 276.395C566.611 277.161 567.246 277.8 567.831 277.822Z" fill="white"/>
          <path opacity="0.11" d="M593.723 258.202C594.308 258.224 594.623 257.621 594.426 256.854C594.229 256.088 593.594 255.449 593.009 255.427C592.424 255.405 592.11 256.008 592.307 256.774C592.504 257.541 593.138 258.18 593.723 258.202Z" fill="white"/>
          <path d="M587.216 233.921C587.655 233.938 587.891 233.486 587.743 232.911C587.595 232.336 587.119 231.857 586.681 231.841C586.242 231.824 586.006 232.276 586.154 232.851C586.302 233.425 586.777 233.905 587.216 233.921Z" fill="white"/>
          <path d="M569.413 305.354C569.852 305.371 570.088 304.919 569.94 304.344C569.792 303.77 569.317 303.29 568.878 303.274C568.439 303.257 568.203 303.709 568.351 304.284C568.499 304.859 568.975 305.338 569.413 305.354Z" fill="white"/>
          <path d="M748.792 325.883C749.231 325.899 749.466 325.447 749.319 324.872C749.171 324.298 748.695 323.819 748.257 323.802C747.818 323.785 747.582 324.238 747.73 324.812C747.878 325.387 748.353 325.866 748.792 325.883Z" fill="white"/>
          <path d="M402.074 301.072C402.512 301.088 402.748 300.636 402.6 300.061C402.453 299.487 401.977 299.008 401.538 298.991C401.1 298.974 400.864 299.427 401.012 300.001C401.159 300.576 401.635 301.055 402.074 301.072Z" fill="white"/>
          <path d="M327.545 282.456C327.983 282.473 328.219 282.021 328.071 281.446C327.924 280.872 327.448 280.392 327.009 280.376C326.571 280.359 326.335 280.811 326.483 281.386C326.63 281.961 327.106 282.44 327.545 282.456Z" fill="white"/>
          <path d="M311.403 254.375C311.842 254.392 312.078 253.939 311.93 253.365C311.782 252.79 311.307 252.311 310.868 252.294C310.429 252.278 310.193 252.73 310.341 253.305C310.489 253.879 310.965 254.358 311.403 254.375Z" fill="white"/>
          <path d="M565.368 246.83C565.807 246.847 566.043 246.394 565.895 245.82C565.747 245.245 565.271 244.766 564.833 244.749C564.394 244.733 564.158 245.185 564.306 245.76C564.454 246.334 564.929 246.813 565.368 246.83Z" fill="white"/>
          <path d="M486.427 294.655C486.866 294.672 487.102 294.22 486.954 293.645C486.806 293.07 486.331 292.591 485.892 292.575C485.453 292.558 485.217 293.01 485.365 293.585C485.513 294.159 485.988 294.639 486.427 294.655Z" fill="white"/>
          <path d="M627.548 329.532C627.987 329.548 628.223 329.096 628.075 328.521C627.927 327.947 627.451 327.468 627.013 327.451C626.574 327.434 626.338 327.887 626.486 328.461C626.634 329.036 627.109 329.515 627.548 329.532Z" fill="white"/>
          <path d="M755.745 287.688C756.183 287.705 756.419 287.252 756.271 286.678C756.124 286.103 755.648 285.624 755.209 285.607C754.771 285.591 754.535 286.043 754.683 286.617C754.83 287.192 755.306 287.671 755.745 287.688Z" fill="white"/>
          <path d="M758.642 250.03C759.081 250.047 759.317 249.595 759.169 249.02C759.021 248.445 758.546 247.966 758.107 247.95C757.668 247.933 757.432 248.385 757.58 248.96C757.728 249.534 758.203 250.014 758.642 250.03Z" fill="white"/>
          <path opacity="0.3" d="M631.085 236.269C631.67 236.291 631.985 235.688 631.788 234.922C631.591 234.156 630.956 233.516 630.371 233.494C629.786 233.472 629.472 234.075 629.669 234.842C629.866 235.608 630.5 236.247 631.085 236.269Z" fill="white"/>
          <path d="M618.412 187.031C618.997 187.053 619.312 186.449 619.115 185.683C618.918 184.917 618.283 184.278 617.698 184.255C617.113 184.233 616.799 184.837 616.996 185.603C617.193 186.369 617.827 187.008 618.412 187.031Z" fill="white"/>
          <path d="M662.282 252.56C662.721 252.577 662.956 252.124 662.809 251.55C662.661 250.975 662.185 250.496 661.747 250.479C661.308 250.463 661.072 250.915 661.22 251.49C661.368 252.064 661.843 252.543 662.282 252.56Z" fill="white"/>
          <path opacity="0.3" d="M681.008 226.487C681.593 226.509 681.908 225.906 681.711 225.14C681.514 224.373 680.879 223.734 680.294 223.712C679.709 223.69 679.395 224.293 679.592 225.059C679.789 225.826 680.423 226.465 681.008 226.487Z" fill="white"/>
          <path opacity="0.3" d="M746.102 277.711C746.687 277.733 747.001 277.13 746.804 276.363C746.607 275.597 745.973 274.958 745.388 274.936C744.803 274.913 744.488 275.517 744.685 276.283C744.882 277.049 745.517 277.689 746.102 277.711Z" fill="white"/>
          <path opacity="0.3" d="M684.499 276.749C685.084 276.771 685.399 276.168 685.202 275.401C685.005 274.635 684.37 273.996 683.785 273.974C683.2 273.952 682.886 274.555 683.083 275.321C683.28 276.087 683.914 276.727 684.499 276.749Z" fill="white"/>
          <path opacity="0.3" d="M383.567 277.023C384.152 277.045 384.467 276.442 384.27 275.675C384.073 274.909 383.438 274.27 382.853 274.248C382.268 274.225 381.954 274.829 382.151 275.595C382.348 276.361 382.982 277.001 383.567 277.023Z" fill="white"/>
          <path opacity="0.3" d="M330.854 237.255C331.439 237.277 331.753 236.674 331.556 235.907C331.359 235.141 330.725 234.502 330.14 234.48C329.555 234.457 329.24 235.061 329.437 235.827C329.634 236.593 330.269 237.232 330.854 237.255Z" fill="white"/>
          <path opacity="0.11" d="M719.037 256.084C719.622 256.106 719.937 255.503 719.739 254.736C719.542 253.97 718.908 253.331 718.323 253.309C717.738 253.287 717.423 253.89 717.62 254.656C717.818 255.422 718.452 256.062 719.037 256.084Z" fill="white"/>
          <path opacity="0.3" d="M400.515 216.546C401.1 216.568 401.415 215.965 401.217 215.199C401.02 214.432 400.386 213.793 399.801 213.771C399.216 213.749 398.901 214.352 399.098 215.118C399.295 215.885 399.93 216.524 400.515 216.546Z" fill="white"/>
          <path opacity="0.11" d="M382.648 202.133C383.234 202.155 383.548 201.551 383.351 200.785C383.154 200.019 382.52 199.38 381.934 199.358C381.349 199.335 381.035 199.939 381.232 200.705C381.429 201.471 382.063 202.11 382.648 202.133Z" fill="white"/>
          <path opacity="0.3" d="M389.835 246.359C390.42 246.381 390.735 245.778 390.538 245.011C390.341 244.245 389.706 243.606 389.121 243.584C388.536 243.561 388.222 244.165 388.419 244.931C388.616 245.697 389.25 246.336 389.835 246.359Z" fill="white"/>
          <path d="M422.75 246.916C423.189 246.933 423.424 246.481 423.277 245.906C423.129 245.332 422.653 244.852 422.214 244.836C421.776 244.819 421.54 245.271 421.688 245.846C421.836 246.421 422.311 246.9 422.75 246.916Z" fill="white"/>
          <path opacity="0.11" d="M824.576 369.052C825.161 369.075 825.476 368.471 825.279 367.705C825.082 366.939 824.447 366.3 823.862 366.277C823.277 366.255 822.963 366.859 823.16 367.625C823.357 368.391 823.991 369.03 824.576 369.052Z" fill="white"/>
          <path d="M829.977 376.809C830.416 376.826 830.652 376.374 830.504 375.799C830.356 375.225 829.881 374.745 829.442 374.729C829.003 374.712 828.767 375.165 828.915 375.739C829.063 376.314 829.539 376.793 829.977 376.809Z" fill="white"/>
          <path d="M843.709 362.912C844.148 362.929 844.383 362.476 844.236 361.902C844.088 361.327 843.612 360.848 843.173 360.831C842.735 360.815 842.499 361.267 842.647 361.842C842.795 362.416 843.27 362.895 843.709 362.912Z" fill="white"/>
          <path d="M798.338 359.815C798.776 359.832 799.012 359.38 798.864 358.805C798.717 358.231 798.241 357.751 797.802 357.735C797.364 357.718 797.128 358.17 797.276 358.745C797.423 359.319 797.899 359.799 798.338 359.815Z" fill="white"/>
          <path opacity="0.11" d="M776.404 375.466C776.99 375.488 777.304 374.884 777.107 374.118C776.91 373.352 776.276 372.713 775.69 372.691C775.105 372.668 774.791 373.272 774.988 374.038C775.185 374.804 775.819 375.443 776.404 375.466Z" fill="white"/>
          <path d="M762.42 359.83C762.713 359.841 762.87 359.539 762.771 359.157C762.673 358.774 762.356 358.454 762.064 358.443C761.771 358.432 761.614 358.734 761.713 359.116C761.811 359.499 762.128 359.819 762.42 359.83Z" fill="white"/>
          <path d="M829.94 396.035C830.232 396.046 830.39 395.745 830.291 395.362C830.193 394.979 829.876 394.66 829.583 394.649C829.291 394.638 829.134 394.939 829.232 395.322C829.331 395.705 829.648 396.024 829.94 396.035Z" fill="white"/>
          <path d="M945.388 400.413C945.68 400.424 945.838 400.122 945.739 399.74C945.641 399.357 945.324 399.037 945.031 399.026C944.739 399.015 944.582 399.317 944.68 399.7C944.779 400.082 945.096 400.402 945.388 400.413Z" fill="white"/>
          <path d="M993.472 365.147C993.764 365.158 993.922 364.857 993.823 364.474C993.725 364.091 993.408 363.772 993.115 363.761C992.823 363.75 992.666 364.051 992.764 364.434C992.863 364.817 993.18 365.136 993.472 365.147Z" fill="white"/>
          <path d="M1027.15 416.556C1027.45 416.567 1027.6 416.266 1027.5 415.883C1027.41 415.5 1027.09 415.181 1026.8 415.17C1026.5 415.159 1026.35 415.46 1026.45 415.843C1026.54 416.226 1026.86 416.545 1027.15 416.556Z" fill="white"/>
          <path d="M649.137 372.018C649.429 372.029 649.586 371.727 649.488 371.345C649.389 370.962 649.073 370.642 648.78 370.631C648.488 370.62 648.331 370.922 648.429 371.305C648.528 371.687 648.845 372.007 649.137 372.018Z" fill="white"/>
          <path opacity="0.11" d="M631.563 334.271C631.856 334.282 632.013 333.98 631.914 333.598C631.816 333.215 631.499 332.895 631.207 332.884C630.914 332.873 630.757 333.175 630.856 333.557C630.954 333.94 631.271 334.26 631.563 334.271Z" fill="white"/>
          <path opacity="0.11" d="M612.899 349.36C613.191 349.371 613.348 349.07 613.25 348.687C613.151 348.304 612.834 347.985 612.542 347.974C612.25 347.963 612.092 348.264 612.191 348.647C612.289 349.03 612.606 349.349 612.899 349.36Z" fill="white"/>
          <path opacity="0.11" d="M641.078 391.631C641.37 391.642 641.528 391.341 641.429 390.958C641.331 390.575 641.014 390.256 640.721 390.245C640.429 390.234 640.272 390.535 640.37 390.918C640.469 391.301 640.786 391.62 641.078 391.631Z" fill="white"/>
          <path opacity="0.11" d="M759.97 368.661C760.262 368.672 760.42 368.37 760.321 367.988C760.223 367.605 759.906 367.286 759.613 367.274C759.321 367.263 759.164 367.565 759.262 367.948C759.361 368.33 759.678 368.65 759.97 368.661Z" fill="white"/>
          <path opacity="0.11" d="M835.305 420.961C835.597 420.972 835.754 420.67 835.656 420.287C835.557 419.905 835.24 419.585 834.948 419.574C834.656 419.563 834.499 419.865 834.597 420.247C834.696 420.63 835.012 420.95 835.305 420.961Z" fill="white"/>
          <path opacity="0.11" d="M935.198 417.879C935.49 417.89 935.647 417.589 935.549 417.206C935.45 416.823 935.133 416.504 934.841 416.493C934.549 416.482 934.392 416.783 934.49 417.166C934.589 417.549 934.905 417.868 935.198 417.879Z" fill="white"/>
          <path opacity="0.3" d="M669.039 355.604C669.331 355.615 669.489 355.314 669.39 354.931C669.292 354.548 668.975 354.229 668.682 354.218C668.39 354.207 668.233 354.508 668.331 354.891C668.43 355.274 668.747 355.593 669.039 355.604Z" fill="white"/>
          <path d="M781.199 322.769C781.492 322.78 781.649 322.478 781.55 322.096C781.452 321.713 781.135 321.393 780.843 321.382C780.55 321.371 780.393 321.673 780.492 322.055C780.59 322.438 780.907 322.758 781.199 322.769Z" fill="white"/>
          <path d="M862.395 324.472C862.687 324.483 862.844 324.182 862.746 323.799C862.647 323.416 862.331 323.097 862.038 323.085C861.746 323.074 861.589 323.376 861.687 323.759C861.786 324.141 862.103 324.461 862.395 324.472Z" fill="white"/>
          <path d="M761.605 385.207C761.898 385.218 762.055 384.917 761.956 384.534C761.858 384.151 761.541 383.832 761.249 383.821C760.956 383.81 760.799 384.111 760.898 384.494C760.996 384.877 761.313 385.196 761.605 385.207Z" fill="white"/>
          <path opacity="0.3" d="M724.537 383.803C724.829 383.814 724.986 383.513 724.888 383.13C724.789 382.747 724.472 382.428 724.18 382.417C723.888 382.406 723.731 382.707 723.829 383.09C723.928 383.473 724.244 383.792 724.537 383.803Z" fill="white"/>
          <path opacity="0.11" d="M670.057 339.164C670.349 339.175 670.506 338.873 670.408 338.491C670.309 338.108 669.992 337.788 669.7 337.777C669.408 337.766 669.25 338.068 669.349 338.45C669.447 338.833 669.764 339.153 670.057 339.164Z" fill="white"/>
          <path opacity="0.3" d="M795.02 339.776C795.313 339.788 795.47 339.486 795.371 339.103C795.273 338.721 794.956 338.401 794.664 338.39C794.371 338.379 794.214 338.68 794.313 339.063C794.411 339.446 794.728 339.765 795.02 339.776Z" fill="white"/>
          <path opacity="0.3" d="M774.003 398.727C774.295 398.738 774.452 398.437 774.354 398.054C774.255 397.671 773.939 397.352 773.646 397.341C773.354 397.33 773.197 397.631 773.295 398.014C773.394 398.397 773.711 398.716 774.003 398.727Z" fill="white"/>
          <path opacity="0.3" d="M711.708 403.232C712 403.243 712.157 402.942 712.059 402.559C711.96 402.176 711.643 401.857 711.351 401.846C711.059 401.835 710.902 402.136 711 402.519C711.099 402.902 711.415 403.221 711.708 403.232Z" fill="white"/>
          <path opacity="0.3" d="M684.398 356.19C684.691 356.201 684.848 355.9 684.749 355.517C684.651 355.134 684.334 354.815 684.042 354.804C683.749 354.793 683.592 355.094 683.691 355.477C683.789 355.86 684.106 356.179 684.398 356.19Z" fill="white"/>
          <path opacity="0.3" d="M1013.24 366.585C1013.53 366.596 1013.69 366.294 1013.59 365.911C1013.49 365.529 1013.18 365.209 1012.89 365.198C1012.59 365.187 1012.44 365.489 1012.53 365.871C1012.63 366.254 1012.95 366.574 1013.24 366.585Z" fill="white"/>
          <path opacity="0.11" d="M920.669 334.92C920.961 334.931 921.118 334.63 921.02 334.247C920.921 333.864 920.605 333.545 920.312 333.534C920.02 333.523 919.863 333.824 919.961 334.207C920.06 334.59 920.377 334.909 920.669 334.92Z" fill="white"/>
          <path opacity="0.11" d="M1006.62 395.86C1006.91 395.871 1007.07 395.57 1006.97 395.187C1006.87 394.804 1006.55 394.485 1006.26 394.474C1005.97 394.463 1005.81 394.764 1005.91 395.147C1006.01 395.53 1006.33 395.849 1006.62 395.86Z" fill="white"/>
          <path opacity="0.3" d="M874.245 397.029C874.83 397.051 875.144 396.448 874.947 395.682C874.75 394.915 874.116 394.276 873.531 394.254C872.946 394.232 872.631 394.835 872.828 395.601C873.025 396.368 873.66 397.007 874.245 397.029Z" fill="white"/>
          <path opacity="0.11" d="M900.138 377.409C900.723 377.432 901.038 376.828 900.841 376.062C900.644 375.296 900.009 374.657 899.424 374.634C898.839 374.612 898.525 375.215 898.722 375.982C898.919 376.748 899.553 377.387 900.138 377.409Z" fill="white"/>
          <path d="M893.631 353.128C894.07 353.145 894.306 352.693 894.158 352.118C894.01 351.544 893.534 351.064 893.096 351.048C892.657 351.031 892.421 351.483 892.569 352.058C892.717 352.632 893.192 353.112 893.631 353.128Z" fill="white"/>
          <path d="M875.828 424.561C876.267 424.578 876.503 424.126 876.355 423.551C876.207 422.977 875.731 422.497 875.293 422.481C874.854 422.464 874.618 422.916 874.766 423.491C874.914 424.066 875.389 424.545 875.828 424.561Z" fill="white"/>
          <path d="M1055.21 445.09C1055.65 445.107 1055.88 444.655 1055.73 444.08C1055.59 443.505 1055.11 443.026 1054.67 443.01C1054.23 442.993 1054 443.445 1054.14 444.02C1054.29 444.594 1054.77 445.074 1055.21 445.09Z" fill="white"/>
          <path d="M708.488 420.279C708.927 420.296 709.163 419.844 709.015 419.269C708.867 418.694 708.392 418.215 707.953 418.199C707.514 418.182 707.278 418.634 707.426 419.209C707.574 419.783 708.05 420.263 708.488 420.279Z" fill="white"/>
          <path d="M633.959 401.664C634.398 401.68 634.634 401.228 634.486 400.653C634.338 400.079 633.862 399.599 633.424 399.583C632.985 399.566 632.749 400.018 632.897 400.593C633.045 401.168 633.52 401.647 633.959 401.664Z" fill="white"/>
          <path d="M617.819 373.582C618.257 373.599 618.493 373.147 618.345 372.572C618.198 371.998 617.722 371.518 617.283 371.502C616.845 371.485 616.609 371.937 616.756 372.512C616.904 373.087 617.38 373.566 617.819 373.582Z" fill="white"/>
          <path d="M871.783 366.037C872.222 366.053 872.458 365.601 872.31 365.026C872.162 364.452 871.686 363.972 871.248 363.956C870.809 363.939 870.573 364.392 870.721 364.966C870.869 365.541 871.344 366.02 871.783 366.037Z" fill="white"/>
          <path d="M792.842 413.862C793.28 413.879 793.516 413.427 793.368 412.852C793.221 412.277 792.745 411.798 792.306 411.782C791.868 411.765 791.632 412.217 791.78 412.792C791.927 413.366 792.403 413.846 792.842 413.862Z" fill="white"/>
          <path d="M933.963 448.739C934.402 448.756 934.637 448.303 934.49 447.729C934.342 447.154 933.866 446.675 933.428 446.659C932.989 446.642 932.753 447.094 932.901 447.669C933.049 448.243 933.524 448.723 933.963 448.739Z" fill="white"/>
          <path d="M1062.16 406.894C1062.6 406.911 1062.83 406.459 1062.69 405.884C1062.54 405.31 1062.06 404.83 1061.62 404.814C1061.18 404.797 1060.95 405.249 1061.1 405.824C1061.24 406.399 1061.72 406.878 1062.16 406.894Z" fill="white"/>
          <path d="M1065.06 369.237C1065.5 369.253 1065.73 368.801 1065.58 368.226C1065.44 367.652 1064.96 367.173 1064.52 367.156C1064.08 367.139 1063.85 367.592 1064 368.166C1064.14 368.741 1064.62 369.22 1065.06 369.237Z" fill="white"/>
          <path opacity="0.3" d="M937.493 355.471C938.078 355.494 938.392 354.89 938.195 354.124C937.998 353.358 937.364 352.719 936.779 352.696C936.194 352.674 935.879 353.277 936.076 354.044C936.273 354.81 936.908 355.449 937.493 355.471Z" fill="white"/>
          <path d="M924.827 306.238C925.412 306.26 925.727 305.657 925.53 304.891C925.332 304.124 924.698 303.485 924.113 303.463C923.528 303.441 923.213 304.044 923.411 304.81C923.608 305.577 924.242 306.216 924.827 306.238Z" fill="white"/>
          <path d="M968.697 371.767C969.135 371.784 969.371 371.331 969.223 370.757C969.076 370.182 968.6 369.703 968.161 369.686C967.723 369.67 967.487 370.122 967.635 370.697C967.782 371.271 968.258 371.75 968.697 371.767Z" fill="white"/>
          <path opacity="0.3" d="M987.422 345.694C988.007 345.716 988.322 345.113 988.125 344.347C987.927 343.58 987.293 342.941 986.708 342.919C986.123 342.897 985.808 343.5 986.005 344.266C986.203 345.033 986.837 345.672 987.422 345.694Z" fill="white"/>
          <path opacity="0.3" d="M1052.52 396.919C1053.1 396.941 1053.42 396.338 1053.22 395.571C1053.02 394.805 1052.39 394.166 1051.8 394.144C1051.22 394.121 1050.9 394.725 1051.1 395.491C1051.3 396.257 1051.93 396.897 1052.52 396.919Z" fill="white"/>
          <path opacity="0.3" d="M990.914 395.956C991.499 395.978 991.814 395.375 991.617 394.609C991.42 393.843 990.785 393.203 990.2 393.181C989.615 393.159 989.301 393.762 989.498 394.529C989.695 395.295 990.329 395.934 990.914 395.956Z" fill="white"/>
          <path opacity="0.3" d="M689.982 396.23C690.567 396.252 690.882 395.649 690.684 394.882C690.487 394.116 689.853 393.477 689.268 393.455C688.683 393.433 688.368 394.036 688.565 394.802C688.763 395.568 689.397 396.208 689.982 396.23Z" fill="white"/>
          <path opacity="0.3" d="M637.269 356.462C637.854 356.484 638.168 355.881 637.971 355.114C637.774 354.348 637.14 353.709 636.555 353.687C635.97 353.664 635.655 354.268 635.852 355.034C636.049 355.8 636.684 356.439 637.269 356.462Z" fill="white"/>
          <path opacity="0.11" d="M1025.45 375.291C1026.04 375.313 1026.35 374.71 1026.15 373.943C1025.96 373.177 1025.32 372.538 1024.74 372.516C1024.15 372.494 1023.84 373.097 1024.04 373.863C1024.23 374.629 1024.87 375.269 1025.45 375.291Z" fill="white"/>
          <path opacity="0.3" d="M706.93 335.753C707.515 335.775 707.83 335.172 707.632 334.405C707.435 333.639 706.801 333 706.216 332.978C705.631 332.955 705.316 333.559 705.513 334.325C705.711 335.091 706.345 335.731 706.93 335.753Z" fill="white"/>
          <path opacity="0.11" d="M689.063 321.341C689.648 321.363 689.963 320.76 689.766 319.994C689.569 319.227 688.934 318.588 688.349 318.566C687.764 318.544 687.45 319.147 687.647 319.913C687.844 320.68 688.478 321.319 689.063 321.341Z" fill="white"/>
          <path opacity="0.3" d="M696.25 365.565C696.835 365.587 697.15 364.984 696.952 364.217C696.755 363.451 696.121 362.812 695.536 362.79C694.951 362.767 694.636 363.371 694.833 364.137C695.031 364.903 695.665 365.542 696.25 365.565Z" fill="white"/>
          <path d="M729.164 366.122C729.603 366.139 729.839 365.687 729.691 365.112C729.543 364.538 729.067 364.058 728.629 364.042C728.19 364.025 727.954 364.477 728.102 365.052C728.25 365.627 728.725 366.106 729.164 366.122Z" fill="white"/>
          </g>
          </g>
          </g>
          <defs>
          <filter id="filter0_f_18_1030" x="-33.3919" y="74.5391" width="1200.78" height="536.461" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_18_1030"/>
          </filter>
          <filter id="filter1_f_18_1030" x="-6.73035" y="174.349" width="1147.46" height="436.651" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_18_1030"/>
          </filter>
          <filter id="filter2_f_18_1030" x="52.2105" y="286.745" width="1029.58" height="324.255" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_18_1030"/>
          </filter>
          <radialGradient id="paint0_radial_18_1030" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(497.23 731.154) scale(970.682 851.329)">
          <stop/>
          <stop offset="1" stopOpacity="0"/>
          </radialGradient>
          <clipPath id="clip0_18_1030">
          <rect width="994.46" height="731.154" fill="white" transform="matrix(0.808282 0.588795 -0.235961 0.971762 308.524 -232)"/>
          </clipPath>
          </defs>
          </svg>
          <svg className="survey-arc-line" width="1267" height="670" viewBox="0 0 1267 670" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_dd_survey)">
              <path d="M66.5 63.9999C66.4999 361.681 320.354 603 633.5 603C946.645 603 1200.5 361.681 1200.5 64" stroke="url(#paint0_linear_survey)" strokeWidth="5"/>
            </g>
            <defs>
              <filter id="filter0_dd_survey" x="-100" y="-100" width="1467" height="869.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="32"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
              </filter>
              <linearGradient id="paint0_linear_survey" x1="633.5" y1="603" x2="633.5" y2="64" gradientUnits="userSpaceOnUse">
                <stop stopColor="#B2FCFF"/>
                <stop offset="0.491922" stopColor="#B2FCFF" stopOpacity="0.1"/>
                <stop offset="1" stopColor="#B2FCFF" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section className="feature-preview-section">
        <div className="feature-preview-glow-wrapper">
          <svg className="feature-preview-glow" width="1440" height="1177" viewBox="0 0 1440 1177" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.3" filter="url(#fp_filter0)">
              <g clipPath="url(#fp_clip0)">
                <g filter="url(#fp_filter1)">
                  <ellipse cx="698.5" cy="496.5" rx="481.5" ry="144.5" fill="#B2FCFF" fillOpacity="0.6"/>
                </g>
              </g>
              <path d="M732 335C416.093 335 160 576.319 160 874L1304 874C1304 576.319 1047.91 335 732 335Z" fill="url(#fp_paint0)"/>
              <mask id="fp_mask0" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="160" y="335" width="1144" height="539">
                <path d="M732 335C416.093 335 160 576.319 160 874L1304 874C1304 576.319 1047.91 335 732 335Z" fill="#09090B"/>
              </mask>
              <g mask="url(#fp_mask0)">
                <g opacity="0.2" filter="url(#fp_filter2)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M732 303C1018.65 303 1256.06 501.697 1297.57 760.902C1176.48 586.25 968.389 471 732 471C495.612 471 287.522 586.249 166.435 760.901C207.944 501.696 445.346 303 732 303Z" fill="#B2FCFF"/>
                </g>
                <g opacity="0.5" filter="url(#fp_filter3)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M732 303C980.678 303 1192.29 452.537 1271.09 661.39C1147.43 506.797 951.97 407 732 407C512.03 407 316.565 506.797 192.905 661.39C271.711 452.537 483.322 303 732 303Z" fill="#B2FCFF"/>
                </g>
                <g filter="url(#fp_filter4)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M732 303C933.298 303 1110.31 400.983 1212.25 549.097C1089.62 431.691 919.734 359 732 359C544.266 359 374.381 431.691 251.748 549.097C353.691 400.983 530.703 303 732 303Z" fill="white"/>
                </g>
              </g>
              <g filter="url(#fp_filter5)">
                <path d="M1304 874C1304 576.319 1047.91 335 732 335C416.093 335 160 576.319 160 874" stroke="url(#fp_paint1)" strokeWidth="5"/>
              </g>
            </g>
            <defs>
              <filter id="fp_filter0" x="-212" y="0" width="1887" height="1177" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="27" result="effect1_foregroundBlur"/>
              </filter>
              <filter id="fp_filter1" x="-95" y="40" width="1587" height="913" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="156" result="effect1_foregroundBlur"/>
              </filter>
              <filter id="fp_filter2" x="126.435" y="263" width="1211.13" height="537.902" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur"/>
              </filter>
              <filter id="fp_filter3" x="152.905" y="263" width="1158.19" height="438.39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur"/>
              </filter>
              <filter id="fp_filter4" x="211.748" y="263" width="1040.5" height="326.097" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur"/>
              </filter>
              <filter id="fp_filter5" x="93.5" y="268.5" width="1277" height="669.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="32"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="4"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.698039 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
              </filter>
              <linearGradient id="fp_paint0" x1="732" y1="335" x2="732" y2="781" gradientUnits="userSpaceOnUse">
                <stop stopColor="#09090B" stopOpacity="0"/>
                <stop offset="0.16253" stopColor="#09090B" stopOpacity="0.2"/>
                <stop offset="1" stopColor="#09090B"/>
              </linearGradient>
              <linearGradient id="fp_paint1" x1="732" y1="335" x2="732" y2="874" gradientUnits="userSpaceOnUse">
                <stop stopColor="#B2FCFF"/>
                <stop offset="0.491922" stopColor="#B2FCFF" stopOpacity="0.1"/>
                <stop offset="1" stopColor="#B2FCFF" stopOpacity="0"/>
              </linearGradient>
              <clipPath id="fp_clip0">
                <rect width="1779" height="1069" fill="white" transform="translate(-158 54)"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="feature-preview-content">
          <h2 className="feature-preview-title">功能前瞻</h2>
          <p className="feature-preview-desc">正式版即将推出更多功能，敬请期待</p>
          <div className="feature-preview-cards">
            <div className="feature-preview-card feature-preview-card-epic">
              <div className="feature-card-logo-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                  <g>
                    <mask id="path-1-inside-1_29_2184" fill="white">
                      <path d="M130 0C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.95431 150 5.63762e-07 141.046 0 130V20C0 8.95431 8.95431 5.63725e-07 20 0H130ZM33.3955 19C26.6499 19 24.1621 21.4878 24.1621 28.2334V109.678C24.1621 110.44 24.1959 111.148 24.2549 111.797C24.422 113.282 24.437 114.713 25.8135 116.33C25.9413 116.517 27.3379 117.54 27.3379 117.54C28.0802 117.914 28.6016 118.169 29.4521 118.523L70.4277 135.692C72.5466 136.661 73.4416 137.049 74.9805 136.995H75C76.5585 137.049 77.4534 136.661 79.5723 135.692L120.543 118.523C121.398 118.169 121.9 117.914 122.662 117.54C122.662 117.54 124.059 116.497 124.187 116.33C125.563 114.713 125.578 113.282 125.745 111.797C125.804 111.148 125.843 110.44 125.843 109.683V28.2285C125.838 21.4878 123.345 19 116.6 19H33.3955ZM74.6807 127.462L55.3926 120.824H94.79L74.6807 127.462ZM47.0732 90.7197H47.4424L47.6289 90.7783H47.8154L48.0029 90.832L48.1846 90.8721L48.3516 90.9062L48.5186 90.9453L48.6855 90.9805L48.873 91.0391L49.0205 91.0732L49.168 91.1328L49.3545 91.1865L49.502 91.2598L49.6943 91.334L49.8613 91.4082L50.0088 91.5059L50.1953 91.5752L50.3232 91.6729L50.5098 91.7617L50.6572 91.8604L50.8252 91.9482L50.9727 92.0615L51.1201 92.1553L51.2676 92.2637L51.4199 92.376L51.5674 92.5039L51.7148 92.6172L51.6064 92.7646L51.4736 92.8975L51.3652 93.0449L51.2324 93.1924L51.125 93.3252L51.0117 93.4531L50.8789 93.6006L50.7705 93.748L50.6572 93.8809L50.5293 94.0283L50.417 94.1758L50.2842 94.3232L50.1758 94.4561L50.0625 94.6035L49.9346 94.751L49.8213 94.9033L49.6943 95.0312L49.5811 95.1787L49.4336 95.0703L49.2861 94.9424L49.1387 94.8447L48.9658 94.7363L48.8389 94.6426L48.6709 94.5498L48.5234 94.4561L48.3516 94.3623L48.2041 94.2891L48.0566 94.2148L47.9092 94.1611L47.7422 94.1025L47.5547 94.0527L47.4072 94.0137L47.2207 93.9746L47.0342 93.9346L46.8477 93.9199H46.6455L46.4189 93.8809H46.0508L45.8643 93.9004H45.6768L45.4902 93.9541L45.3232 93.9941L45.1562 94.0479L44.9736 94.1025L44.8262 94.1758L44.6396 94.2549L44.5068 94.3428L44.3594 94.4414L44.2119 94.5303L44.0791 94.6426L43.9512 94.7559L43.8184 94.8643L43.71 94.9971L43.5625 95.125L43.4648 95.2725L43.376 95.4053L43.2627 95.5527L43.1895 95.7197L43.0908 95.8672L43.002 96.0342L42.9482 96.2012L42.8691 96.3691L42.8203 96.5557L42.7959 96.7422L42.7422 96.9092L42.7021 97.1162V97.2979L42.668 97.4844V97.9277L42.6875 98.1191L42.7021 98.2861L42.7217 98.4678L42.7617 98.6553L42.8154 98.8027L42.835 98.9893L42.8896 99.1367L42.9482 99.2842L43.0225 99.4756L43.1152 99.6582L43.1895 99.8057L43.2822 99.9531L43.3906 100.105L43.5039 100.253L43.5977 100.386L43.7451 100.514L43.8574 100.646L43.9854 100.754L44.2803 100.98L44.4326 101.074L44.5811 101.162L44.748 101.241L44.9346 101.314L45.082 101.389L45.2686 101.442L45.4561 101.502L45.6426 101.536L45.8242 101.575L46.0117 101.595L46.2373 101.609H46.8477L47.0732 101.575H47.2549L47.4424 101.517L47.6289 101.482L47.8154 101.423L47.9834 101.389L48.1504 101.314L48.2979 101.241L48.4844 101.162L48.5977 101.089L48.7451 100.995V99.2891H46.0312V96.5361H52.1621V102.672L52.0342 102.78L51.8867 102.894L51.7539 102.986L51.6064 103.1L51.459 103.188L51.3115 103.301L51.1641 103.395L51.0117 103.488L50.8252 103.581L50.6572 103.675L50.5098 103.769L50.3232 103.842L50.1758 103.936L49.9893 104.009L49.8018 104.083L49.6152 104.156L49.4482 104.23L49.2812 104.284L49.1133 104.344L48.9316 104.397L48.7646 104.452L48.5781 104.511L48.4111 104.545L48.2236 104.584L48.0371 104.624L47.8506 104.658L47.668 104.678L47.2949 104.717L47.0732 104.731L46.8867 104.752L46.6797 104.771H45.7168L45.5098 104.731H45.3232L45.1406 104.697H44.9541L44.7676 104.639L44.5811 104.604L44.3936 104.564L44.2119 104.53L44.0645 104.472L43.8779 104.437L43.6904 104.378L43.5234 104.304L43.3564 104.25L43.1699 104.177L43.002 104.103L42.8154 104.029L42.668 103.95L42.4814 103.861L42.3535 103.764L42.166 103.675L42.0342 103.576L41.8867 103.488L41.7383 103.375L41.5908 103.262L41.4238 103.153L41.3105 103.041L41.1631 102.928L41.0303 102.8L40.9033 102.687L40.7705 102.559L40.6621 102.426L40.5293 102.298L40.4209 102.15L40.3076 102.018L40.2148 101.87L40.1016 101.723L40.0078 101.575L39.9199 101.428L39.8213 101.256L39.7324 101.108L39.6592 100.941L39.585 100.774L39.5068 100.606L39.4326 100.439L39.3789 100.292L39.3047 100.125L39.2656 99.958L39.2119 99.791L39.1719 99.6035L39.1182 99.4365L39.0791 99.25L39.0645 99.083L39.0244 98.8955L39.0049 98.7285L38.9902 98.542L38.9707 98.3604L38.9512 98.1729V97.1504L38.9902 96.9639V96.7617L39.0391 96.5752V96.3887L39.0986 96.2012L39.1572 96.0195L39.1924 95.833L39.2461 95.666L39.3047 95.4785L39.3594 95.3115L39.4326 95.125L39.5068 94.958L39.585 94.79L39.6592 94.623L39.7324 94.4561L39.8262 94.2891L39.9199 94.1416L40.0078 93.9941L40.1064 93.8467L40.1953 93.6992L40.3076 93.5469L40.4209 93.3994L40.5293 93.252L40.6621 93.1191L40.7705 92.9912L40.8828 92.8584L41.0303 92.7305L41.1436 92.5977L41.291 92.4844L41.4238 92.3564L41.5713 92.2432L41.7188 92.1357L41.8662 92.0371L42.0137 91.9287L42.1611 91.8359L42.3145 91.7422L42.4814 91.6484L42.668 91.5557L42.8154 91.4668L43.002 91.3877L43.1699 91.3145L43.3564 91.2207L43.5039 91.1719L43.6904 91.1123L43.8574 91.0391L44.0254 91L44.1924 90.9453L44.3789 90.9062L44.5459 90.8525L44.7285 90.8125H44.915L45.1016 90.7588H45.2891L45.4756 90.7197H45.6572L45.8242 90.6846H46.8477L47.0732 90.7197ZM106.015 90.7588H106.383L106.57 90.8125H106.791L106.978 90.8721L107.146 90.9062L107.332 90.9453L107.519 90.9805L107.686 91.0195L107.873 91.0732L108.055 91.1328L108.202 91.167L108.389 91.2402L108.576 91.2998L108.724 91.373L108.91 91.4473L109.097 91.5205L109.265 91.6191L109.397 91.6885L109.579 91.7861L109.746 91.875L109.894 91.9678L110.065 92.0811L110.213 92.1699L110.508 92.3965L110.655 92.5039L110.548 92.6514L110.454 92.8037L110.341 92.9512L110.232 93.0986L110.12 93.2666L110.026 93.4141L109.913 93.5615L109.805 93.7139L109.707 93.8613L109.599 94.0088L109.485 94.1562L109.377 94.3086L109.279 94.4756L109.171 94.623L109.043 94.7705L108.944 94.918L108.837 95.0703L108.689 94.958L108.521 94.8643L108.374 94.7754L108.227 94.6621L108.055 94.5889L107.907 94.4902L107.721 94.4219L107.593 94.3477L107.405 94.2695L107.258 94.1953L107.11 94.1416L106.943 94.0674L106.757 94.0137L106.57 93.9541L106.383 93.9004L106.182 93.8613L105.995 93.8271L105.808 93.7871L105.621 93.7676L105.439 93.748L105.271 93.7334H104.859L104.657 93.7676L104.471 93.8066L104.283 93.8418L104.136 93.9199L104.009 93.9941L103.841 94.1416L103.729 94.3086L103.654 94.4756V94.9375L103.748 95.1445L103.821 95.2578L103.949 95.3857L104.136 95.4834L104.283 95.5723L104.471 95.6455L104.657 95.7197L104.898 95.793L105.046 95.833L105.193 95.8867L105.38 95.9258L105.527 95.9805L105.715 96.0195L105.921 96.0732L106.122 96.1279L106.329 96.1865L106.535 96.2207L106.718 96.2803L106.924 96.334L107.11 96.374L107.293 96.4277L107.479 96.4814L107.666 96.541L107.854 96.5947L108.021 96.6484L108.207 96.708L108.389 96.7812L108.576 96.875L108.763 96.9492L108.949 97.042L109.137 97.1357L109.284 97.2295L109.432 97.3174L109.599 97.4307L109.731 97.5293L109.898 97.6572L110.026 97.7842L110.174 97.9326L110.307 98.0645L110.4 98.2129L110.528 98.3994L110.621 98.5273L110.695 98.7139L110.788 98.8418L110.843 99.0283L110.901 99.1758L110.936 99.3633L110.976 99.5498L111.01 99.7363L111.029 99.9238L111.049 100.105V100.572L111.029 100.774L111.01 100.961L110.995 101.167L110.956 101.354L110.901 101.536L110.862 101.723L110.808 101.91L110.734 102.077L110.66 102.225L110.582 102.392L110.493 102.539L110.38 102.687L110.282 102.834L110.193 102.986L110.065 103.119L109.952 103.247L109.82 103.36L109.672 103.488L109.545 103.602L109.397 103.714L109.249 103.803L109.097 103.916L108.91 104.009L108.763 104.083L108.576 104.182L108.389 104.25L108.207 104.324L108.021 104.383L107.834 104.437L107.686 104.491L107.312 104.569L107.165 104.604L106.978 104.644H106.791L106.609 104.678H106.423L106.235 104.717H104.859L104.677 104.697L104.49 104.678L104.283 104.663L104.097 104.624L103.915 104.604L103.729 104.569L103.541 104.53L103.335 104.477L103.153 104.437L102.966 104.383L102.779 104.344L102.593 104.289L102.41 104.23L102.224 104.156L102.057 104.103L101.869 104.049L101.683 103.97L101.535 103.896L101.349 103.822L101.201 103.729L101.014 103.655L100.847 103.562L100.719 103.469L100.532 103.375L100.399 103.286L100.232 103.188L100.085 103.08L99.9375 102.967L99.79 102.858L99.6426 102.745L99.5098 102.633L99.3623 102.505L99.4707 102.357L99.6025 102.225L99.7158 102.077L99.8438 101.93L99.957 101.797L100.065 101.649L100.198 101.502L100.311 101.369L100.438 101.222L100.552 101.094L100.68 100.946L100.793 100.799L100.901 100.666L101.034 100.519L101.146 100.371L101.274 100.238L101.407 100.091L101.535 100.199L101.722 100.312L101.85 100.425L102.037 100.533L102.185 100.632L102.352 100.739L102.499 100.833L102.671 100.907L102.818 101L102.985 101.074L103.173 101.147L103.32 101.222L103.507 101.275L103.654 101.354L103.841 101.403L104.023 101.462L104.21 101.521L104.396 101.556L104.584 101.595L104.771 101.63H104.972L105.159 101.688H106.182L106.368 101.649L106.55 101.609L106.697 101.575L106.846 101.521L106.978 101.442L107.146 101.335L107.243 101.202L107.332 101.055L107.386 100.867V100.439L107.312 100.258L107.204 100.11L107.091 99.9971L106.924 99.8838L106.791 99.8105L106.609 99.7363L106.423 99.6631L106.201 99.5645L106.068 99.5303L105.921 99.4912L105.734 99.4414L105.587 99.4023L105.399 99.3428L105.213 99.3086L105.012 99.25L104.824 99.2158L104.618 99.1562L104.437 99.1221L104.249 99.0635L104.062 99.0283L103.876 98.9697L103.688 98.9209L103.507 98.8809L103.34 98.8223L103.173 98.7676L103.005 98.709L102.818 98.6348L102.612 98.5615L102.425 98.4873L102.243 98.4141L102.057 98.3203L101.869 98.2275L101.742 98.1338L101.555 98.04L101.422 97.9326L101.255 97.834L101.146 97.7256L101.014 97.5977L100.866 97.4648L100.754 97.3369L100.646 97.2041L100.547 97.0771L100.459 96.9287L100.36 96.7617L100.291 96.6289L100.232 96.4814L100.179 96.3145L100.124 96.167L100.085 95.9805L100.051 95.8135V95.626L100.011 95.4395V94.6426L100.03 94.4561L100.051 94.2695L100.085 94.1221L100.124 93.9346L100.179 93.7871L100.218 93.6006L100.291 93.4531L100.365 93.2666L100.438 93.1191L100.532 92.9316L100.626 92.7842L100.754 92.6367L100.852 92.4893L100.999 92.3418L101.127 92.209L101.24 92.0615L101.407 91.9287L101.516 91.8359L101.683 91.7227L101.83 91.6143L101.978 91.5156L102.165 91.4277L102.312 91.3535L102.504 91.2598L102.651 91.1865L102.838 91.1279L103.021 91.0537L103.207 91L103.34 90.96L103.521 90.9258L103.669 90.8867L103.855 90.8525L104.043 90.8125L104.416 90.7734L104.604 90.7588L104.771 90.7197H105.788L106.015 90.7588ZM74.0508 91.0928L74.1494 91.2598L74.2578 91.4082L74.3506 91.5752L74.4443 91.7227L74.5381 91.8896L74.626 92.0371L74.7393 92.209L74.833 92.3564L74.9258 92.5039L75.0195 92.6709L75.1133 92.8184L75.2412 92.9863L75.3145 93.1338L75.4131 93.3057L75.5215 93.4531L75.6338 93.6006L75.708 93.7676L75.8164 93.915L75.9141 94.082L75.9834 94.2295L76.1162 94.4023L76.21 94.5498L76.3027 94.7168L76.3965 94.8643L76.4844 95.0117L76.5977 95.1787L76.6914 95.3262L76.7852 95.498L76.8779 95.6455L76.9717 95.8135L77.0801 95.9609L77.1777 96.1279L77.2666 96.2754L77.3799 96.1279L77.4531 95.9404L77.5664 95.8135L77.6748 95.626L77.7734 95.498L77.8418 95.3115L77.9746 95.1787L78.0684 94.9971L78.1416 94.8643L78.2549 94.7168L78.3633 94.5303L78.4609 94.4023L78.5498 94.2148L78.6436 94.082L78.7559 93.9004L78.8447 93.7676L78.9434 93.5811L79.0312 93.4531L79.1299 93.3057L79.2383 93.1191L79.332 92.9863L79.4248 92.8037L79.5332 92.6709L79.6318 92.4844L79.7197 92.3564L79.833 92.209L79.9268 92.0225L80.0352 91.8896L80.1328 91.708L80.2217 91.5752L80.3203 91.3877L80.4277 91.2598L80.5215 91.0732L80.6152 90.9453H84.46V104.658H80.8506V96.5947L80.7627 96.7227L80.6494 96.9092L80.5557 97.0371L80.4424 97.1846L80.3496 97.3721L80.2412 97.5049L80.1426 97.6523L80.0352 97.8389L79.9414 97.9668L79.8477 98.1143L79.7197 98.2617L79.627 98.4531L79.5137 98.5811L79.4199 98.7285L79.332 98.915L79.2188 99.043L79.125 99.1904L79.0117 99.3779L78.9189 99.5107L78.8105 99.6582L78.7119 99.8447L78.624 99.9727L78.5107 100.12L78.417 100.307L78.3086 100.439L78.1963 100.587L78.1025 100.734L78.0088 100.922L77.8955 101.055L77.7881 101.202L77.7139 101.389L77.5811 101.517L77.4883 101.664L77.3799 101.851L77.2812 101.983H77.2129L77.0996 101.816L77.0059 101.669L76.8926 101.497L76.7998 101.35L76.6914 101.182L76.5928 101.034L76.4844 100.867L76.3916 100.72L76.2832 100.553L76.1846 100.405L76.0566 100.233L75.9834 100.086L75.8701 99.9189L75.7617 99.7715L75.6641 99.6035L75.5557 99.4561L75.4619 99.2695L75.3535 99.1221L75.2559 98.9551L75.1475 98.8076L75.0537 98.6348L74.9414 98.4873L74.8525 98.3203L74.7393 98.1729L74.6465 98.0059L74.5332 97.8584L74.4395 97.6914L74.3311 97.5439L74.2334 97.3721L74.125 97.2246L74.0312 97.0566L73.9033 96.9092L73.8301 96.7422L73.7168 96.5947V104.678H70.1523V91.1074L70.1328 90.9453H73.9434L74.0508 91.0928ZM98.0049 94.043H90.7773V96.2412H97.2773V99.1562H90.7822V101.517H98.1035V104.619H87.2129V91.0537L87.1934 90.9453H98.0049V94.043ZM62.9053 91.0195L62.9785 91.1865L63.0527 91.3535L63.1064 91.54L63.1807 91.708L63.2539 91.875L63.333 92.042L63.4062 92.209L63.4609 92.376L63.5537 92.5586L63.6279 92.7256L63.7012 92.8975L63.7412 93.0645L63.8145 93.2314L63.9082 93.3994L63.9814 93.5811L64.0557 93.748L64.1094 93.915L64.1836 94.082L64.2812 94.25L64.3311 94.417L64.4092 94.6035L64.4639 94.79L64.5371 94.9375L64.6357 95.125L64.7041 95.2725L64.7783 95.459L64.8369 95.6455L64.8916 95.793L64.9844 95.9805L65.0586 96.1279L65.1318 96.3145L65.1865 96.4619L65.2646 96.6484L65.3584 96.8359L65.4326 97.0029L65.54 97.3369L65.6143 97.5049L65.7129 97.6719L65.7812 97.8535L65.8604 98.0254L65.9092 98.1924L65.9873 98.3604L66.0615 98.5273L66.1348 98.6943L66.209 98.876L66.2676 99.043L66.3418 99.2109L66.4355 99.3779L66.5088 99.5449L66.583 99.7119L66.6221 99.8984L66.6953 100.066L66.7891 100.233L66.8633 100.4L66.917 100.567L66.9912 100.734L67.0645 100.922L67.1631 101.108L67.2119 101.256L67.291 101.442L67.3447 101.59L67.4189 101.777L67.5117 101.964L67.5859 102.111L67.6396 102.298L67.7188 102.445L67.7725 102.633L67.8662 102.78L67.9395 102.967L67.9941 103.153L68.0674 103.301L68.1465 103.488L68.2344 103.636L68.3135 103.822L68.3623 104.004L68.4219 104.151L68.4951 104.339L68.5938 104.486H64.7441L64.6455 104.324L64.5967 104.156L64.5176 103.989L64.4443 103.803L64.3896 103.636L64.3164 103.469L64.2422 103.301L64.1836 103.134L64.1094 102.967L64.0361 102.8L63.9814 102.633L63.9082 102.445L63.834 102.278L63.7754 102.111L63.7012 101.944H58.3672L58.293 102.131L58.2393 102.278L58.165 102.466L58.0723 102.647L58.0322 102.795L57.959 102.986L57.8848 103.134L57.8311 103.321L57.7568 103.469L57.6836 103.655L57.624 103.803L57.5508 103.989L57.4766 104.172L57.4033 104.319L57.3496 104.506H53.5391L53.6123 104.324L53.6865 104.156L53.7598 103.989L53.8193 103.803L53.8682 103.636L53.9668 103.469L54.04 103.301L54.1143 103.134L54.168 102.967L54.2422 102.78L54.3398 102.613L54.4092 102.445L54.4678 102.278L54.5225 102.111L54.5957 101.944L54.6943 101.758L54.7627 101.59L54.8369 101.423L54.8955 101.256L54.9697 101.089L55.043 100.922L55.1172 100.734L55.1904 100.548L55.25 100.4L55.3232 100.214L55.417 100.066L55.4902 99.8789L55.5449 99.6973L55.5986 99.5498L55.6729 99.3633L55.7705 99.2158L55.8398 99.0283L55.918 98.8809L55.9678 98.6943L56.0459 98.5078L56.1396 98.3604L56.1934 98.1729L56.2676 98.0254L56.3262 97.8389L56.4004 97.6523L56.4941 97.5049L56.5674 97.3174L56.6211 97.1699L56.6953 96.9834L56.7539 96.8359L56.8477 96.6484L56.9219 96.4619L56.9951 96.2949L57.0488 96.1279L57.123 95.9609L57.2217 95.793L57.29 95.626L57.3291 95.4395L57.4033 95.2725L57.4766 95.1055L57.5703 94.9375L57.6445 94.7705L57.6982 94.6035L57.7773 94.417L57.8506 94.2344L57.9248 94.0869L57.998 93.9004L58.0527 93.7529L58.126 93.5664L58.2002 93.3789L58.2979 93.2314L58.3672 93.0449L58.4258 92.8975L58.4805 92.7109L58.5537 92.5635L58.6523 92.376L58.7207 92.1895L58.7803 92.042L58.8535 91.8555L58.9277 91.708L59.0205 91.5205L59.0752 91.334L59.1289 91.1865L59.208 91L59.3555 90.8525H62.8311L62.9053 91.0195ZM60.9727 95.3311L60.9141 95.4785L60.8398 95.666L60.7666 95.8477L60.7119 96.0146L60.6387 96.1816L60.5596 96.3691L60.4863 96.5557L60.4316 96.7031L60.3584 96.8896L60.2842 97.0371L60.2256 97.2246L60.1514 97.4111L60.0781 97.5586L60.0234 97.7451L59.9502 97.8926L59.876 98.0801L59.7979 98.2666L59.748 98.4141L59.6699 98.6006L59.5957 98.7881L59.542 98.9355L59.4629 99.1221H62.625L62.5508 98.9355L62.4922 98.7676L62.418 98.5811L62.3447 98.4141L62.29 98.2471L62.2168 98.0801L62.1426 97.8926L62.084 97.7256L62.0098 97.5586L61.9365 97.3916L61.8828 97.2246L61.8086 97.0371L61.75 96.8701L61.6758 96.7031L61.6025 96.5361L61.5479 96.3691L61.4746 96.1865L61.4004 96L61.3418 95.8525L61.2676 95.666L61.1943 95.4785L61.1396 95.3115L61.0469 95.1445L60.9727 95.3311ZM102.405 34.291C107.981 34.291 110.695 37.0052 110.695 42.6348V51.873H103.949V43.0078C103.949 41.2036 103.113 40.3682 101.368 40.3682H100.218C98.4134 40.3682 97.5772 41.2036 97.5771 43.0078V71.5889C97.5772 73.3882 98.4134 74.2236 100.218 74.2236H101.496C103.227 74.2236 104.062 73.3882 104.062 71.5889V61.3623H110.828V71.9033C110.828 77.5328 108.055 80.3007 102.465 80.3008H99.0625C93.4526 80.3008 90.7041 77.5132 90.7041 71.9033V42.6934C90.7041 37.0786 93.4526 34.291 99.0625 34.291H102.405ZM54.4482 40.9434H46.0117V53.7461H54.1338V60.0098H46.0117V73.6484H54.5615V79.9121H39.1377V34.6641H54.4482V40.9434ZM68.7021 34.6641C74.2921 34.6642 77.0605 37.4526 77.0605 43.082V55.1035C77.0604 60.7327 74.292 63.5057 68.7021 63.5059H64.7979V79.9121H57.9043V34.6641H68.7021ZM87.041 79.9121H80.167V34.6641H87.041V79.9121ZM64.7783 57.4287H67.625C69.3508 57.4287 70.1865 56.5926 70.1865 54.7734V43.416C70.1865 41.597 69.3507 40.7607 67.625 40.7607H64.7783V57.4287Z"/>
                    </mask>
                    <path d="M130 0C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.95431 150 5.63762e-07 141.046 0 130V20C0 8.95431 8.95431 5.63725e-07 20 0H130ZM33.3955 19C26.6499 19 24.1621 21.4878 24.1621 28.2334V109.678C24.1621 110.44 24.1959 111.148 24.2549 111.797C24.422 113.282 24.437 114.713 25.8135 116.33C25.9413 116.517 27.3379 117.54 27.3379 117.54C28.0802 117.914 28.6016 118.169 29.4521 118.523L70.4277 135.692C72.5466 136.661 73.4416 137.049 74.9805 136.995H75C76.5585 137.049 77.4534 136.661 79.5723 135.692L120.543 118.523C121.398 118.169 121.9 117.914 122.662 117.54C122.662 117.54 124.059 116.497 124.187 116.33C125.563 114.713 125.578 113.282 125.745 111.797C125.804 111.148 125.843 110.44 125.843 109.683V28.2285C125.838 21.4878 123.345 19 116.6 19H33.3955ZM74.6807 127.462L55.3926 120.824H94.79L74.6807 127.462ZM47.0732 90.7197H47.4424L47.6289 90.7783H47.8154L48.0029 90.832L48.1846 90.8721L48.3516 90.9062L48.5186 90.9453L48.6855 90.9805L48.873 91.0391L49.0205 91.0732L49.168 91.1328L49.3545 91.1865L49.502 91.2598L49.6943 91.334L49.8613 91.4082L50.0088 91.5059L50.1953 91.5752L50.3232 91.6729L50.5098 91.7617L50.6572 91.8604L50.8252 91.9482L50.9727 92.0615L51.1201 92.1553L51.2676 92.2637L51.4199 92.376L51.5674 92.5039L51.7148 92.6172L51.6064 92.7646L51.4736 92.8975L51.3652 93.0449L51.2324 93.1924L51.125 93.3252L51.0117 93.4531L50.8789 93.6006L50.7705 93.748L50.6572 93.8809L50.5293 94.0283L50.417 94.1758L50.2842 94.3232L50.1758 94.4561L50.0625 94.6035L49.9346 94.751L49.8213 94.9033L49.6943 95.0312L49.5811 95.1787L49.4336 95.0703L49.2861 94.9424L49.1387 94.8447L48.9658 94.7363L48.8389 94.6426L48.6709 94.5498L48.5234 94.4561L48.3516 94.3623L48.2041 94.2891L48.0566 94.2148L47.9092 94.1611L47.7422 94.1025L47.5547 94.0527L47.4072 94.0137L47.2207 93.9746L47.0342 93.9346L46.8477 93.9199H46.6455L46.4189 93.8809H46.0508L45.8643 93.9004H45.6768L45.4902 93.9541L45.3232 93.9941L45.1562 94.0479L44.9736 94.1025L44.8262 94.1758L44.6396 94.2549L44.5068 94.3428L44.3594 94.4414L44.2119 94.5303L44.0791 94.6426L43.9512 94.7559L43.8184 94.8643L43.71 94.9971L43.5625 95.125L43.4648 95.2725L43.376 95.4053L43.2627 95.5527L43.1895 95.7197L43.0908 95.8672L43.002 96.0342L42.9482 96.2012L42.8691 96.3691L42.8203 96.5557L42.7959 96.7422L42.7422 96.9092L42.7021 97.1162V97.2979L42.668 97.4844V97.9277L42.6875 98.1191L42.7021 98.2861L42.7217 98.4678L42.7617 98.6553L42.8154 98.8027L42.835 98.9893L42.8896 99.1367L42.9482 99.2842L43.0225 99.4756L43.1152 99.6582L43.1895 99.8057L43.2822 99.9531L43.3906 100.105L43.5039 100.253L43.5977 100.386L43.7451 100.514L43.8574 100.646L43.9854 100.754L44.2803 100.98L44.4326 101.074L44.5811 101.162L44.748 101.241L44.9346 101.314L45.082 101.389L45.2686 101.442L45.4561 101.502L45.6426 101.536L45.8242 101.575L46.0117 101.595L46.2373 101.609H46.8477L47.0732 101.575H47.2549L47.4424 101.517L47.6289 101.482L47.8154 101.423L47.9834 101.389L48.1504 101.314L48.2979 101.241L48.4844 101.162L48.5977 101.089L48.7451 100.995V99.2891H46.0312V96.5361H52.1621V102.672L52.0342 102.78L51.8867 102.894L51.7539 102.986L51.6064 103.1L51.459 103.188L51.3115 103.301L51.1641 103.395L51.0117 103.488L50.8252 103.581L50.6572 103.675L50.5098 103.769L50.3232 103.842L50.1758 103.936L49.9893 104.009L49.8018 104.083L49.6152 104.156L49.4482 104.23L49.2812 104.284L49.1133 104.344L48.9316 104.397L48.7646 104.452L48.5781 104.511L48.4111 104.545L48.2236 104.584L48.0371 104.624L47.8506 104.658L47.668 104.678L47.2949 104.717L47.0732 104.731L46.8867 104.752L46.6797 104.771H45.7168L45.5098 104.731H45.3232L45.1406 104.697H44.9541L44.7676 104.639L44.5811 104.604L44.3936 104.564L44.2119 104.53L44.0645 104.472L43.8779 104.437L43.6904 104.378L43.5234 104.304L43.3564 104.25L43.1699 104.177L43.002 104.103L42.8154 104.029L42.668 103.95L42.4814 103.861L42.3535 103.764L42.166 103.675L42.0342 103.576L41.8867 103.488L41.7383 103.375L41.5908 103.262L41.4238 103.153L41.3105 103.041L41.1631 102.928L41.0303 102.8L40.9033 102.687L40.7705 102.559L40.6621 102.426L40.5293 102.298L40.4209 102.15L40.3076 102.018L40.2148 101.87L40.1016 101.723L40.0078 101.575L39.9199 101.428L39.8213 101.256L39.7324 101.108L39.6592 100.941L39.585 100.774L39.5068 100.606L39.4326 100.439L39.3789 100.292L39.3047 100.125L39.2656 99.958L39.2119 99.791L39.1719 99.6035L39.1182 99.4365L39.0791 99.25L39.0645 99.083L39.0244 98.8955L39.0049 98.7285L38.9902 98.542L38.9707 98.3604L38.9512 98.1729V97.1504L38.9902 96.9639V96.7617L39.0391 96.5752V96.3887L39.0986 96.2012L39.1572 96.0195L39.1924 95.833L39.2461 95.666L39.3047 95.4785L39.3594 95.3115L39.4326 95.125L39.5068 94.958L39.585 94.79L39.6592 94.623L39.7324 94.4561L39.8262 94.2891L39.9199 94.1416L40.0078 93.9941L40.1064 93.8467L40.1953 93.6992L40.3076 93.5469L40.4209 93.3994L40.5293 93.252L40.6621 93.1191L40.7705 92.9912L40.8828 92.8584L41.0303 92.7305L41.1436 92.5977L41.291 92.4844L41.4238 92.3564L41.5713 92.2432L41.7188 92.1357L41.8662 92.0371L42.0137 91.9287L42.1611 91.8359L42.3145 91.7422L42.4814 91.6484L42.668 91.5557L42.8154 91.4668L43.002 91.3877L43.1699 91.3145L43.3564 91.2207L43.5039 91.1719L43.6904 91.1123L43.8574 91.0391L44.0254 91L44.1924 90.9453L44.3789 90.9062L44.5459 90.8525L44.7285 90.8125H44.915L45.1016 90.7588H45.2891L45.4756 90.7197H45.6572L45.8242 90.6846H46.8477L47.0732 90.7197ZM106.015 90.7588H106.383L106.57 90.8125H106.791L106.978 90.8721L107.146 90.9062L107.332 90.9453L107.519 90.9805L107.686 91.0195L107.873 91.0732L108.055 91.1328L108.202 91.167L108.389 91.2402L108.576 91.2998L108.724 91.373L108.91 91.4473L109.097 91.5205L109.265 91.6191L109.397 91.6885L109.579 91.7861L109.746 91.875L109.894 91.9678L110.065 92.0811L110.213 92.1699L110.508 92.3965L110.655 92.5039L110.548 92.6514L110.454 92.8037L110.341 92.9512L110.232 93.0986L110.12 93.2666L110.026 93.4141L109.913 93.5615L109.805 93.7139L109.707 93.8613L109.599 94.0088L109.485 94.1562L109.377 94.3086L109.279 94.4756L109.171 94.623L109.043 94.7705L108.944 94.918L108.837 95.0703L108.689 94.958L108.521 94.8643L108.374 94.7754L108.227 94.6621L108.055 94.5889L107.907 94.4902L107.721 94.4219L107.593 94.3477L107.405 94.2695L107.258 94.1953L107.11 94.1416L106.943 94.0674L106.757 94.0137L106.57 93.9541L106.383 93.9004L106.182 93.8613L105.995 93.8271L105.808 93.7871L105.621 93.7676L105.439 93.748L105.271 93.7334H104.859L104.657 93.7676L104.471 93.8066L104.283 93.8418L104.136 93.9199L104.009 93.9941L103.841 94.1416L103.729 94.3086L103.654 94.4756V94.9375L103.748 95.1445L103.821 95.2578L103.949 95.3857L104.136 95.4834L104.283 95.5723L104.471 95.6455L104.657 95.7197L104.898 95.793L105.046 95.833L105.193 95.8867L105.38 95.9258L105.527 95.9805L105.715 96.0195L105.921 96.0732L106.122 96.1279L106.329 96.1865L106.535 96.2207L106.718 96.2803L106.924 96.334L107.11 96.374L107.293 96.4277L107.479 96.4814L107.666 96.541L107.854 96.5947L108.021 96.6484L108.207 96.708L108.389 96.7812L108.576 96.875L108.763 96.9492L108.949 97.042L109.137 97.1357L109.284 97.2295L109.432 97.3174L109.599 97.4307L109.731 97.5293L109.898 97.6572L110.026 97.7842L110.174 97.9326L110.307 98.0645L110.4 98.2129L110.528 98.3994L110.621 98.5273L110.695 98.7139L110.788 98.8418L110.843 99.0283L110.901 99.1758L110.936 99.3633L110.976 99.5498L111.01 99.7363L111.029 99.9238L111.049 100.105V100.572L111.029 100.774L111.01 100.961L110.995 101.167L110.956 101.354L110.901 101.536L110.862 101.723L110.808 101.91L110.734 102.077L110.66 102.225L110.582 102.392L110.493 102.539L110.38 102.687L110.282 102.834L110.193 102.986L110.065 103.119L109.952 103.247L109.82 103.36L109.672 103.488L109.545 103.602L109.397 103.714L109.249 103.803L109.097 103.916L108.91 104.009L108.763 104.083L108.576 104.182L108.389 104.25L108.207 104.324L108.021 104.383L107.834 104.437L107.686 104.491L107.312 104.569L107.165 104.604L106.978 104.644H106.791L106.609 104.678H106.423L106.235 104.717H104.859L104.677 104.697L104.49 104.678L104.283 104.663L104.097 104.624L103.915 104.604L103.729 104.569L103.541 104.53L103.335 104.477L103.153 104.437L102.966 104.383L102.779 104.344L102.593 104.289L102.41 104.23L102.224 104.156L102.057 104.103L101.869 104.049L101.683 103.97L101.535 103.896L101.349 103.822L101.201 103.729L101.014 103.655L100.847 103.562L100.719 103.469L100.532 103.375L100.399 103.286L100.232 103.188L100.085 103.08L99.9375 102.967L99.79 102.858L99.6426 102.745L99.5098 102.633L99.3623 102.505L99.4707 102.357L99.6025 102.225L99.7158 102.077L99.8438 101.93L99.957 101.797L100.065 101.649L100.198 101.502L100.311 101.369L100.438 101.222L100.552 101.094L100.68 100.946L100.793 100.799L100.901 100.666L101.034 100.519L101.146 100.371L101.274 100.238L101.407 100.091L101.535 100.199L101.722 100.312L101.85 100.425L102.037 100.533L102.185 100.632L102.352 100.739L102.499 100.833L102.671 100.907L102.818 101L102.985 101.074L103.173 101.147L103.32 101.222L103.507 101.275L103.654 101.354L103.841 101.403L104.023 101.462L104.21 101.521L104.396 101.556L104.584 101.595L104.771 101.63H104.972L105.159 101.688H106.182L106.368 101.649L106.55 101.609L106.697 101.575L106.846 101.521L106.978 101.442L107.146 101.335L107.243 101.202L107.332 101.055L107.386 100.867V100.439L107.312 100.258L107.204 100.11L107.091 99.9971L106.924 99.8838L106.791 99.8105L106.609 99.7363L106.423 99.6631L106.201 99.5645L106.068 99.5303L105.921 99.4912L105.734 99.4414L105.587 99.4023L105.399 99.3428L105.213 99.3086L105.012 99.25L104.824 99.2158L104.618 99.1562L104.437 99.1221L104.249 99.0635L104.062 99.0283L103.876 98.9697L103.688 98.9209L103.507 98.8809L103.34 98.8223L103.173 98.7676L103.005 98.709L102.818 98.6348L102.612 98.5615L102.425 98.4873L102.243 98.4141L102.057 98.3203L101.869 98.2275L101.742 98.1338L101.555 98.04L101.422 97.9326L101.255 97.834L101.146 97.7256L101.014 97.5977L100.866 97.4648L100.754 97.3369L100.646 97.2041L100.547 97.0771L100.459 96.9287L100.36 96.7617L100.291 96.6289L100.232 96.4814L100.179 96.3145L100.124 96.167L100.085 95.9805L100.051 95.8135V95.626L100.011 95.4395V94.6426L100.03 94.4561L100.051 94.2695L100.085 94.1221L100.124 93.9346L100.179 93.7871L100.218 93.6006L100.291 93.4531L100.365 93.2666L100.438 93.1191L100.532 92.9316L100.626 92.7842L100.754 92.6367L100.852 92.4893L100.999 92.3418L101.127 92.209L101.24 92.0615L101.407 91.9287L101.516 91.8359L101.683 91.7227L101.83 91.6143L101.978 91.5156L102.165 91.4277L102.312 91.3535L102.504 91.2598L102.651 91.1865L102.838 91.1279L103.021 91.0537L103.207 91L103.34 90.96L103.521 90.9258L103.669 90.8867L103.855 90.8525L104.043 90.8125L104.416 90.7734L104.604 90.7588L104.771 90.7197H105.788L106.015 90.7588ZM74.0508 91.0928L74.1494 91.2598L74.2578 91.4082L74.3506 91.5752L74.4443 91.7227L74.5381 91.8896L74.626 92.0371L74.7393 92.209L74.833 92.3564L74.9258 92.5039L75.0195 92.6709L75.1133 92.8184L75.2412 92.9863L75.3145 93.1338L75.4131 93.3057L75.5215 93.4531L75.6338 93.6006L75.708 93.7676L75.8164 93.915L75.9141 94.082L75.9834 94.2295L76.1162 94.4023L76.21 94.5498L76.3027 94.7168L76.3965 94.8643L76.4844 95.0117L76.5977 95.1787L76.6914 95.3262L76.7852 95.498L76.8779 95.6455L76.9717 95.8135L77.0801 95.9609L77.1777 96.1279L77.2666 96.2754L77.3799 96.1279L77.4531 95.9404L77.5664 95.8135L77.6748 95.626L77.7734 95.498L77.8418 95.3115L77.9746 95.1787L78.0684 94.9971L78.1416 94.8643L78.2549 94.7168L78.3633 94.5303L78.4609 94.4023L78.5498 94.2148L78.6436 94.082L78.7559 93.9004L78.8447 93.7676L78.9434 93.5811L79.0312 93.4531L79.1299 93.3057L79.2383 93.1191L79.332 92.9863L79.4248 92.8037L79.5332 92.6709L79.6318 92.4844L79.7197 92.3564L79.833 92.209L79.9268 92.0225L80.0352 91.8896L80.1328 91.708L80.2217 91.5752L80.3203 91.3877L80.4277 91.2598L80.5215 91.0732L80.6152 90.9453H84.46V104.658H80.8506V96.5947L80.7627 96.7227L80.6494 96.9092L80.5557 97.0371L80.4424 97.1846L80.3496 97.3721L80.2412 97.5049L80.1426 97.6523L80.0352 97.8389L79.9414 97.9668L79.8477 98.1143L79.7197 98.2617L79.627 98.4531L79.5137 98.5811L79.4199 98.7285L79.332 98.915L79.2188 99.043L79.125 99.1904L79.0117 99.3779L78.9189 99.5107L78.8105 99.6582L78.7119 99.8447L78.624 99.9727L78.5107 100.12L78.417 100.307L78.3086 100.439L78.1963 100.587L78.1025 100.734L78.0088 100.922L77.8955 101.055L77.7881 101.202L77.7139 101.389L77.5811 101.517L77.4883 101.664L77.3799 101.851L77.2812 101.983H77.2129L77.0996 101.816L77.0059 101.669L76.8926 101.497L76.7998 101.35L76.6914 101.182L76.5928 101.034L76.4844 100.867L76.3916 100.72L76.2832 100.553L76.1846 100.405L76.0566 100.233L75.9834 100.086L75.8701 99.9189L75.7617 99.7715L75.6641 99.6035L75.5557 99.4561L75.4619 99.2695L75.3535 99.1221L75.2559 98.9551L75.1475 98.8076L75.0537 98.6348L74.9414 98.4873L74.8525 98.3203L74.7393 98.1729L74.6465 98.0059L74.5332 97.8584L74.4395 97.6914L74.3311 97.5439L74.2334 97.3721L74.125 97.2246L74.0312 97.0566L73.9033 96.9092L73.8301 96.7422L73.7168 96.5947V104.678H70.1523V91.1074L70.1328 90.9453H73.9434L74.0508 91.0928ZM98.0049 94.043H90.7773V96.2412H97.2773V99.1562H90.7822V101.517H98.1035V104.619H87.2129V91.0537L87.1934 90.9453H98.0049V94.043ZM62.9053 91.0195L62.9785 91.1865L63.0527 91.3535L63.1064 91.54L63.1807 91.708L63.2539 91.875L63.333 92.042L63.4062 92.209L63.4609 92.376L63.5537 92.5586L63.6279 92.7256L63.7012 92.8975L63.7412 93.0645L63.8145 93.2314L63.9082 93.3994L63.9814 93.5811L64.0557 93.748L64.1094 93.915L64.1836 94.082L64.2812 94.25L64.3311 94.417L64.4092 94.6035L64.4639 94.79L64.5371 94.9375L64.6357 95.125L64.7041 95.2725L64.7783 95.459L64.8369 95.6455L64.8916 95.793L64.9844 95.9805L65.0586 96.1279L65.1318 96.3145L65.1865 96.4619L65.2646 96.6484L65.3584 96.8359L65.4326 97.0029L65.54 97.3369L65.6143 97.5049L65.7129 97.6719L65.7812 97.8535L65.8604 98.0254L65.9092 98.1924L65.9873 98.3604L66.0615 98.5273L66.1348 98.6943L66.209 98.876L66.2676 99.043L66.3418 99.2109L66.4355 99.3779L66.5088 99.5449L66.583 99.7119L66.6221 99.8984L66.6953 100.066L66.7891 100.233L66.8633 100.4L66.917 100.567L66.9912 100.734L67.0645 100.922L67.1631 101.108L67.2119 101.256L67.291 101.442L67.3447 101.59L67.4189 101.777L67.5117 101.964L67.5859 102.111L67.6396 102.298L67.7188 102.445L67.7725 102.633L67.8662 102.78L67.9395 102.967L67.9941 103.153L68.0674 103.301L68.1465 103.488L68.2344 103.636L68.3135 103.822L68.3623 104.004L68.4219 104.151L68.4951 104.339L68.5938 104.486H64.7441L64.6455 104.324L64.5967 104.156L64.5176 103.989L64.4443 103.803L64.3896 103.636L64.3164 103.469L64.2422 103.301L64.1836 103.134L64.1094 102.967L64.0361 102.8L63.9814 102.633L63.9082 102.445L63.834 102.278L63.7754 102.111L63.7012 101.944H58.3672L58.293 102.131L58.2393 102.278L58.165 102.466L58.0723 102.647L58.0322 102.795L57.959 102.986L57.8848 103.134L57.8311 103.321L57.7568 103.469L57.6836 103.655L57.624 103.803L57.5508 103.989L57.4766 104.172L57.4033 104.319L57.3496 104.506H53.5391L53.6123 104.324L53.6865 104.156L53.7598 103.989L53.8193 103.803L53.8682 103.636L53.9668 103.469L54.04 103.301L54.1143 103.134L54.168 102.967L54.2422 102.78L54.3398 102.613L54.4092 102.445L54.4678 102.278L54.5225 102.111L54.5957 101.944L54.6943 101.758L54.7627 101.59L54.8369 101.423L54.8955 101.256L54.9697 101.089L55.043 100.922L55.1172 100.734L55.1904 100.548L55.25 100.4L55.3232 100.214L55.417 100.066L55.4902 99.8789L55.5449 99.6973L55.5986 99.5498L55.6729 99.3633L55.7705 99.2158L55.8398 99.0283L55.918 98.8809L55.9678 98.6943L56.0459 98.5078L56.1396 98.3604L56.1934 98.1729L56.2676 98.0254L56.3262 97.8389L56.4004 97.6523L56.4941 97.5049L56.5674 97.3174L56.6211 97.1699L56.6953 96.9834L56.7539 96.8359L56.8477 96.6484L56.9219 96.4619L56.9951 96.2949L57.0488 96.1279L57.123 95.9609L57.2217 95.793L57.29 95.626L57.3291 95.4395L57.4033 95.2725L57.4766 95.1055L57.5703 94.9375L57.6445 94.7705L57.6982 94.6035L57.7773 94.417L57.8506 94.2344L57.9248 94.0869L57.998 93.9004L58.0527 93.7529L58.126 93.5664L58.2002 93.3789L58.2979 93.2314L58.3672 93.0449L58.4258 92.8975L58.4805 92.7109L58.5537 92.5635L58.6523 92.376L58.7207 92.1895L58.7803 92.042L58.8535 91.8555L58.9277 91.708L59.0205 91.5205L59.0752 91.334L59.1289 91.1865L59.208 91L59.3555 90.8525H62.8311L62.9053 91.0195ZM60.9727 95.3311L60.9141 95.4785L60.8398 95.666L60.7666 95.8477L60.7119 96.0146L60.6387 96.1816L60.5596 96.3691L60.4863 96.5557L60.4316 96.7031L60.3584 96.8896L60.2842 97.0371L60.2256 97.2246L60.1514 97.4111L60.0781 97.5586L60.0234 97.7451L59.9502 97.8926L59.876 98.0801L59.7979 98.2666L59.748 98.4141L59.6699 98.6006L59.5957 98.7881L59.542 98.9355L59.4629 99.1221H62.625L62.5508 98.9355L62.4922 98.7676L62.418 98.5811L62.3447 98.4141L62.29 98.2471L62.2168 98.0801L62.1426 97.8926L62.084 97.7256L62.0098 97.5586L61.9365 97.3916L61.8828 97.2246L61.8086 97.0371L61.75 96.8701L61.6758 96.7031L61.6025 96.5361L61.5479 96.3691L61.4746 96.1865L61.4004 96L61.3418 95.8525L61.2676 95.666L61.1943 95.4785L61.1396 95.3115L61.0469 95.1445L60.9727 95.3311ZM102.405 34.291C107.981 34.291 110.695 37.0052 110.695 42.6348V51.873H103.949V43.0078C103.949 41.2036 103.113 40.3682 101.368 40.3682H100.218C98.4134 40.3682 97.5772 41.2036 97.5771 43.0078V71.5889C97.5772 73.3882 98.4134 74.2236 100.218 74.2236H101.496C103.227 74.2236 104.062 73.3882 104.062 71.5889V61.3623H110.828V71.9033C110.828 77.5328 108.055 80.3007 102.465 80.3008H99.0625C93.4526 80.3008 90.7041 77.5132 90.7041 71.9033V42.6934C90.7041 37.0786 93.4526 34.291 99.0625 34.291H102.405ZM54.4482 40.9434H46.0117V53.7461H54.1338V60.0098H46.0117V73.6484H54.5615V79.9121H39.1377V34.6641H54.4482V40.9434ZM68.7021 34.6641C74.2921 34.6642 77.0605 37.4526 77.0605 43.082V55.1035C77.0604 60.7327 74.292 63.5057 68.7021 63.5059H64.7979V79.9121H57.9043V34.6641H68.7021ZM87.041 79.9121H80.167V34.6641H87.041V79.9121ZM64.7783 57.4287H67.625C69.3508 57.4287 70.1865 56.5926 70.1865 54.7734V43.416C70.1865 41.597 69.3507 40.7607 67.625 40.7607H64.7783V57.4287Z" fill="url(#paint0_linear_29_2184)" fillOpacity="0.25" mask="url(#path-1-inside-1_29_2184)"/>
                    <path d="M150 20H151V20H150ZM130 150V151V151V150ZM0 130H-1V130H0ZM20 0V-1V-1V0ZM24.1621 28.2334L23.1621 28.2334V28.2334H24.1621ZM24.2549 111.797L23.259 111.887L23.26 111.898L23.2612 111.909L24.2549 111.797ZM25.8135 116.33L26.6388 115.765L26.6091 115.722L26.575 115.682L25.8135 116.33ZM27.3379 117.54L26.7469 118.347L26.814 118.396L26.8883 118.433L27.3379 117.54ZM29.4521 118.523L29.8386 117.601L29.8364 117.6L29.4521 118.523ZM70.4277 135.692L70.8434 134.783L70.8289 134.776L70.8142 134.77L70.4277 135.692ZM74.9805 136.995V135.995H74.9629L74.9453 135.996L74.9805 136.995ZM75 136.995L75.0347 135.996L75.0173 135.995H75V136.995ZM79.5723 135.692L79.1858 134.77L79.1711 134.776L79.1566 134.783L79.5723 135.692ZM120.543 118.523L120.161 117.599L120.156 117.601L120.543 118.523ZM122.662 117.54L123.102 118.438L123.186 118.397L123.26 118.341L122.662 117.54ZM124.187 116.33L123.425 115.682L123.408 115.702L123.392 115.723L124.187 116.33ZM125.745 111.797L126.739 111.909L126.74 111.898L126.741 111.887L125.745 111.797ZM125.843 28.2285H126.843V28.2278L125.843 28.2285ZM74.6807 127.462L74.3553 128.407L74.674 128.517L74.9941 128.412L74.6807 127.462ZM55.3926 120.824V119.824L55.0672 121.77L55.3926 120.824ZM94.79 120.824L95.1035 121.774L94.79 119.824V120.824Z" fill="url(#paint1_linear_29_2184)" fillOpacity="0.1" mask="url(#path-1-inside-1_29_2184)"/>
                  </g>
                  <defs>
                    <filter id="filter0_i_29_2184" x="-30" y="-30" width="210" height="210" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="3"/>
                      <feGaussianBlur stdDeviation="4"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_29_2184"/>
                    </filter>
                    <clipPath id="bgblur_0_29_2184_clip_path" transform="translate(30 30)">
                      <path d="M130 0C141.046 0 150 8.95431 150 20V130C150 141.046 141.046 150 130 150H20C8.95431 150 5.63762e-07 141.046 0 130V20C0 8.95431 8.95431 5.63725e-07 20 0H130ZM33.3955 19C26.6499 19 24.1621 21.4878 24.1621 28.2334V109.678C24.1621 110.44 24.1959 111.148 24.2549 111.797C24.422 113.282 24.437 114.713 25.8135 116.33C25.9413 116.517 27.3379 117.54 27.3379 117.54C28.0802 117.914 28.6016 118.169 29.4521 118.523L70.4277 135.692C72.5466 136.661 73.4416 137.049 74.9805 136.995H75C76.5585 137.049 77.4534 136.661 79.5723 135.692L120.543 118.523C121.398 118.169 121.9 117.914 122.662 117.54C122.662 117.54 124.059 116.497 124.187 116.33C125.563 114.713 125.578 113.282 125.745 111.797C125.804 111.148 125.843 110.44 125.843 109.683V28.2285C125.838 21.4878 123.345 19 116.6 19H33.3955ZM74.6807 127.462L55.3926 120.824H94.79L74.6807 127.462ZM102.405 34.291C107.981 34.291 110.695 37.0052 110.695 42.6348V51.873H103.949V43.0078C103.949 41.2036 103.113 40.3682 101.368 40.3682H100.218C98.4134 40.3682 97.5772 41.2036 97.5771 43.0078V71.5889C97.5772 73.3882 98.4134 74.2236 100.218 74.2236H101.496C103.227 74.2236 104.062 73.3882 104.062 71.5889V61.3623H110.828V71.9033C110.828 77.5328 108.055 80.3007 102.465 80.3008H99.0625C93.4526 80.3008 90.7041 77.5132 90.7041 71.9033V42.6934C90.7041 37.0786 93.4526 34.291 99.0625 34.291H102.405ZM54.4482 40.9434H46.0117V53.7461H54.1338V60.0098H46.0117V73.6484H54.5615V79.9121H39.1377V34.6641H54.4482V40.9434ZM68.7021 34.6641C74.2921 34.6642 77.0605 37.4526 77.0605 43.082V55.1035C77.0604 60.7327 74.292 63.5057 68.7021 63.5059H64.7979V79.9121H57.9043V34.6641H68.7021ZM87.041 79.9121H80.167V34.6641H87.041V79.9121ZM64.7783 57.4287H67.625C69.3508 57.4287 70.1865 56.5926 70.1865 54.7734V43.416C70.1865 41.597 69.3507 40.7607 67.625 40.7607H64.7783V57.4287Z"/>
                    </clipPath>
                    <linearGradient id="paint0_linear_29_2184" x1="75" y1="0" x2="75" y2="150" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#BAD7F5"/>
                      <stop offset="1" stopColor="#565C61"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_29_2184" x1="75" y1="0" x2="75" y2="150" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#BAD7F5"/>
                      <stop offset="1" stopColor="#6D7D8F" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="feature-card-corner-dot feature-card-corner-dot-tl" aria-hidden="true"></span>
                <span className="feature-card-corner-dot feature-card-corner-dot-tr" aria-hidden="true"></span>
                <span className="feature-card-corner-dot feature-card-corner-dot-bl" aria-hidden="true"></span>
                <span className="feature-card-corner-dot feature-card-corner-dot-br" aria-hidden="true"></span>
              </div>
              <img className="feature-card-bottom-circuit feature-card-bottom-circuit-left" src="/epic-circuit-bottom-left.svg" alt="" aria-hidden="true" />
              <img className="feature-card-bottom-circuit feature-card-bottom-circuit-right" src="/epic-circuit-bottom-right.svg" alt="" aria-hidden="true" />
              <h3 className="feature-card-title">Epic 多账号管理</h3>
              <p className="feature-card-desc">快速切换 Epic 游戏资产，随时畅玩不同游戏库内容。</p>
            </div>
            <div className="feature-preview-card feature-preview-card-games">
              <h3 className="feature-card-title">海量游戏点击即玩</h3>
              <p className="feature-card-desc">即点即玩，无需安装，随时开启游戏体验。</p>
              <div className="feature-card-games-box" aria-hidden="true">
                <div className="feature-card-games-marquees">
                  <Marquee className="feature-card-games-marquee feature-card-games-marquee-row1" style={{ "--duration": "26s", "--gap": "7px" }}>
                    {featurePreviewPhotoRows[0].map((item, index) => (
                      <div key={`fp-row1-${index}`} className="feature-card-games-image-wrap">
                        <img src={item.src} alt="" className="feature-card-games-image" style={{ objectPosition: item.position }} />
                      </div>
                    ))}
                  </Marquee>
                  <Marquee className="feature-card-games-marquee feature-card-games-marquee-row2" reverse style={{ "--duration": "24s", "--gap": "7px" }}>
                    {featurePreviewPhotoRows[1].map((item, index) => (
                      <div key={`fp-row2-${index}`} className="feature-card-games-image-wrap">
                        <img src={item.src} alt="" className="feature-card-games-image" style={{ objectPosition: item.position }} />
                      </div>
                    ))}
                  </Marquee>
                  <Marquee className="feature-card-games-marquee feature-card-games-marquee-row3" style={{ "--duration": "30s", "--gap": "7px" }}>
                    {featurePreviewPhotoRows[2].map((item, index) => (
                      <div key={`fp-row3-${index}`} className="feature-card-games-image-wrap">
                        <img src={item.src} alt="" className="feature-card-games-image" style={{ objectPosition: item.position }} />
                      </div>
                    ))}
                  </Marquee>
                </div>
                <div className="feature-card-games-fade-left" />
                <div className="feature-card-games-fade-right" />
              </div>
            </div>
            <div className="feature-preview-card feature-preview-card-cdkey">
              <h3 className="feature-card-title">一站式游戏平台</h3>
              <p className="feature-card-desc">解锁热门游戏激活码和租赁服务，全方位满足玩家多样需求，探索更多游戏内容</p>
              <div className="feature-card-cdkey-boxes">
                <svg className="feature-card-cdkey-connector feature-card-cdkey-connector-left" xmlns="http://www.w3.org/2000/svg" width="120" height="49" viewBox="0 0 120 49" fill="none" aria-hidden="true">
                  <path d="M119 49V22.5L97 0.5H0" stroke="#BAD7F5" strokeOpacity="0.14"/>
                </svg>
                <svg className="feature-card-cdkey-connector feature-card-cdkey-connector-right" xmlns="http://www.w3.org/2000/svg" width="119" height="49" viewBox="0 0 119 49" fill="none" aria-hidden="true">
                  <path d="M0.5 49V22.5L22.5 0.5H119.5" stroke="#BAD7F5" strokeOpacity="0.14"/>
                </svg>
                <svg className="feature-card-cdkey-link feature-card-cdkey-link-left" xmlns="http://www.w3.org/2000/svg" width="1" height="17" viewBox="0 0 1 17" fill="none" aria-hidden="true">
                  <path d="M0.499997 2.98023e-07L0.5 17" stroke="#BAD7F5" strokeOpacity="0.14"/>
                </svg>
                <svg className="feature-card-cdkey-link feature-card-cdkey-link-right" xmlns="http://www.w3.org/2000/svg" width="1" height="17" viewBox="0 0 1 17" fill="none" aria-hidden="true">
                  <path d="M0.499997 2.98023e-07L0.5 17" stroke="#BAD7F5" strokeOpacity="0.14"/>
                </svg>
                <div className="feature-card-cdkey-box">
                  <span className="feature-card-cdkey-dot feature-card-cdkey-dot-tl" aria-hidden="true"></span>
                  <span className="feature-card-cdkey-dot feature-card-cdkey-dot-tr" aria-hidden="true"></span>
                  <span className="feature-card-cdkey-dot feature-card-cdkey-dot-bl" aria-hidden="true"></span>
                  <span className="feature-card-cdkey-dot feature-card-cdkey-dot-br" aria-hidden="true"></span>
                  <div className="feature-card-cdkey-inner-box">
                    <svg className="feature-card-cdkey-icon feature-card-cdkey-icon-en" xmlns="http://www.w3.org/2000/svg" width="128" height="46" viewBox="0 0 128 46" fill="none">
                      <g filter="url(#filter0_d_29_2240)">
                        <path d="M119.658 11.446H123.564L114.996 33.748C113.232 38.452 109.956 41.14 105.672 40.846V37.444C108.486 37.654 110.25 35.932 111.342 33.16L111.72 32.362L102.564 11.446H106.47L113.61 27.91L119.658 11.446Z" fill="#1E2427"/>
                        <path d="M83.8962 23.626C84.6102 27.406 87.5922 29.548 91.4982 29.548C94.3962 29.548 96.4962 28.204 97.5462 26.482L100.654 28.246C98.8062 31.102 95.6142 32.992 91.4142 32.992C84.6522 32.992 80.1582 28.246 80.1582 21.946C80.1582 15.73 84.6102 10.9 91.1622 10.9C97.5042 10.9 101.62 16.108 101.62 21.988C101.62 22.534 101.578 23.08 101.494 23.626H83.8962ZM91.1622 14.344C87.2142 14.344 84.4842 16.78 83.8962 20.434H97.9242C97.2942 16.276 94.3122 14.344 91.1622 14.344Z" fill="#1E2427"/>
                        <path d="M79.8639 32.446H75.3279L65.7519 22.492V32.446H62.0979V3.04599H65.7519V20.728L74.8239 11.446H79.5279L69.4899 21.61L79.8639 32.446Z" fill="#1E2427"/>
                        <path d="M52.9078 3.04599H56.5618V32.446H52.9078V28.834C51.2278 31.396 48.5398 32.992 44.9698 32.992C39.1318 32.992 34.3438 28.162 34.3438 21.946C34.3438 15.73 39.1318 10.9 44.9698 10.9C48.5398 10.9 51.2278 12.496 52.9078 15.058V3.04599ZM45.4318 29.464C49.6738 29.464 52.9078 26.23 52.9078 21.946C52.9078 17.662 49.6738 14.428 45.4318 14.428C41.2318 14.428 37.9978 17.662 37.9978 21.946C37.9978 26.23 41.2318 29.464 45.4318 29.464Z" fill="#1E2427"/>
                        <path d="M18.872 32.992C9.884 32.992 3.5 26.188 3.5 17.746C3.5 9.262 9.884 2.5 18.872 2.5C24.29 2.5 29.078 5.314 31.556 9.64L28.154 11.614C26.474 8.38 22.904 6.28 18.872 6.28C11.984 6.28 7.364 11.278 7.364 17.746C7.364 24.172 11.984 29.17 18.872 29.17C22.904 29.17 26.474 27.07 28.154 23.878L31.556 25.81C29.12 30.136 24.332 32.992 18.872 32.992Z" fill="#1E2427"/>
                        <path d="M106.635 11.1963L106.699 11.3467L113.591 27.2373L119.424 11.3594L119.483 11.1963H123.928L123.798 11.5361L115.229 33.835C113.44 38.6059 110.084 41.3995 105.655 41.0957L105.422 41.0791V37.1748L105.69 37.1943C107.037 37.2948 108.119 36.9345 108.996 36.2256C109.88 35.5115 110.573 34.4309 111.109 33.0684L111.112 33.0605L111.116 33.0527L111.445 32.3574L102.335 11.5459L102.182 11.1963H106.635ZM18.8721 2.25C24.3767 2.25002 29.2485 5.10957 31.7725 9.51562L31.8965 9.73145L31.6816 9.85645L28.2793 11.8301L28.0527 11.9619L27.9326 11.7295C26.2994 8.58559 22.8192 6.5303 18.8721 6.53027C12.127 6.53027 7.61426 11.4113 7.61426 17.7461C7.6143 24.0383 12.1264 28.9199 18.8721 28.9199C22.8195 28.9199 26.2996 26.8643 27.9326 23.7617L28.0527 23.5332L28.2773 23.6602L31.6797 25.5928L31.8965 25.7158L31.7734 25.9326C29.2917 30.3397 24.4193 33.2422 18.8721 33.2422C9.74288 33.2422 3.25005 26.3229 3.25 17.7461C3.25 9.12674 9.74329 2.25 18.8721 2.25ZM56.8115 2.7959V32.6963H52.6582V29.6133C50.9181 31.8666 48.3169 33.2422 44.9697 33.2422C38.9869 33.2422 34.0939 28.2932 34.0938 21.9463C34.0938 15.5992 38.9868 10.6504 44.9697 10.6504C48.3165 10.6504 50.9181 12.0245 52.6582 14.2773V2.7959H56.8115ZM91.1621 10.6504C97.6677 10.6504 101.87 15.9972 101.87 21.9883C101.87 22.5471 101.827 23.1057 101.741 23.6641L101.709 23.876H84.2041C84.5874 25.5668 85.4501 26.8903 86.6514 27.8057C87.9239 28.7752 89.5906 29.2978 91.498 29.2979C94.3149 29.2979 96.3314 27.9941 97.333 26.3516L97.459 26.1445L97.6699 26.2646L100.777 28.0283L101.008 28.1592L100.864 28.3818C98.9686 31.3115 95.6958 33.2422 91.4141 33.2422C87.9727 33.2422 85.0929 32.0329 83.0732 30.0078C81.0542 27.9833 79.9083 25.1567 79.9082 21.9463C79.9082 15.5986 84.4658 10.6504 91.1621 10.6504ZM66.002 2.7959V20.1143L74.6455 11.2715L74.7188 11.1963H80.126L79.7061 11.6221L69.8389 21.6123L80.0449 32.2734L80.4492 32.6963H75.2217L75.1475 32.6191L66.002 23.1123V32.6963H61.8477V2.7959H66.002ZM45.4316 14.6777C41.3716 14.6778 38.248 17.7985 38.248 21.9463C38.2482 26.0939 41.3717 29.2138 45.4316 29.2139C49.5346 29.2139 52.6581 26.093 52.6582 21.9463C52.6582 17.7994 49.5346 14.6777 45.4316 14.6777ZM91.1621 14.5938C89.2411 14.5938 87.6311 15.186 86.4316 16.209C85.2979 17.176 84.5187 18.539 84.1953 20.1836H97.6279C97.2845 18.3077 96.4388 16.9361 95.3291 16.0225C94.1613 15.0611 92.6864 14.5938 91.1621 14.5938Z" stroke="#1E2427" strokeWidth="0.5"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_29_2240" x="0" y="0" width="127.292" height="45.3682" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1.5"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.846605 0 0 0 0 0.846605 0 0 0 0 0.846605 0 0 0 0.19 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_2240"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_2240" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="feature-card-cdkey-box">
                  <span className="feature-card-cdkey-dot feature-card-cdkey-dot-tl" aria-hidden="true"></span>
                  <span className="feature-card-cdkey-dot feature-card-cdkey-dot-tr" aria-hidden="true"></span>
                  <span className="feature-card-cdkey-dot feature-card-cdkey-dot-bl" aria-hidden="true"></span>
                  <span className="feature-card-cdkey-dot feature-card-cdkey-dot-br" aria-hidden="true"></span>
                  <div className="feature-card-cdkey-inner-box">
                    <svg className="feature-card-cdkey-icon feature-card-cdkey-icon-zh" xmlns="http://www.w3.org/2000/svg" width="159" height="41" viewBox="0 0 159 41" fill="none">
                      <g filter="url(#filter0_d_29_2256)">
                        <mask id="path-1-outside-1_29_2256" maskUnits="userSpaceOnUse" x="2.68079" y="1.63037" width="154" height="36" fill="black">
                          <rect fill="white" x="2.68079" y="1.63037" width="154" height="36"/>
                          <path d="M128.361 11.7384C127.329 12.8904 126.177 13.9824 124.905 15.0144L123.897 11.9544C125.073 11.0424 126.381 9.68637 127.821 7.88637C129.261 6.06237 130.425 4.31037 131.313 2.63037L133.941 3.67437C133.269 5.04237 132.393 6.50637 131.313 8.06637V19.5504H128.361V11.7384ZM145.641 10.5144H155.469V12.9984H145.641V16.2384H154.389V18.7224H134.121V16.2384H142.617V12.9984H132.861V10.5144H142.617V7.31037C140.217 7.50237 137.493 7.65837 134.445 7.77837L134.265 5.40237C140.433 5.13837 146.685 4.62237 153.021 3.85437L153.309 6.19437C150.981 6.50637 148.425 6.79437 145.641 7.05837V10.5144ZM151.509 21.3144V29.6304H148.413V23.8704H131.421V29.8104H128.325V21.3144H151.509ZM141.465 26.4624C141.393 27.3504 141.261 28.0704 141.069 28.6224C146.973 30.4944 151.653 32.0424 155.109 33.2664L153.849 36.0024C152.721 35.5944 149.601 34.5024 144.489 32.7264L139.701 31.0704C138.717 32.1024 137.157 32.9904 135.021 33.7344C132.885 34.5024 129.813 35.2584 125.805 36.0024L124.509 33.0864C128.205 32.4864 131.013 31.8984 132.933 31.3224C134.853 30.7464 136.185 30.0984 136.929 29.3784C137.697 28.6344 138.141 27.6744 138.261 26.4984L138.369 24.8424H141.573C141.573 25.3464 141.537 25.8864 141.465 26.4624Z"/>
                          <path d="M95.3088 25.2024C94.6608 24.4584 93.5088 23.2824 91.8528 21.6744V35.8584H88.9368V22.1064C87.6168 25.0824 86.2008 27.6024 84.6888 29.6664L83.5008 26.2824C84.4608 24.9384 85.3848 23.3664 86.2728 21.5664C87.1848 19.7664 87.9648 17.9184 88.6128 16.0224H84.1128V13.0704H88.9368V8.53437C88.0488 8.70237 86.5128 8.96637 84.3288 9.32637L84.0048 6.44637C85.9488 6.15837 88.0608 5.78637 90.3408 5.33037C92.6208 4.85037 94.5648 4.35837 96.1728 3.85437L96.6768 6.69837C95.6448 7.03437 94.0368 7.44237 91.8528 7.92237V13.0704H96.7128V16.0224H91.8528V18.1464C92.7408 18.8664 93.6648 19.6824 94.6248 20.5944C95.6088 21.4824 96.4368 22.2864 97.1088 23.0064L95.3088 25.2024ZM113.237 4.75437V31.6104H115.685V34.5624H94.9128V31.6104H98.4408V4.75437H113.237ZM110.213 13.7544V7.67037H101.429V13.7544H110.213ZM101.429 22.5384H110.213V16.6344H101.429V22.5384ZM110.213 25.4544H101.429V31.6104H110.213V25.4544Z"/>
                          <path d="M75.9728 26.4984C75.7808 27.7464 75.4328 29.3784 74.9288 31.3944C74.5688 32.8344 74.0288 33.9144 73.3088 34.6344C72.6128 35.3544 71.8088 35.7144 70.8968 35.7144C69.9368 35.7144 69.0608 35.4264 68.2688 34.8504C67.5008 34.2744 66.6608 33.2664 65.7488 31.8264C65.3648 31.2024 64.9088 30.2904 64.3808 29.0904C62.3648 30.8184 60.0968 32.4504 57.5768 33.9864L56.0288 31.3944C58.7408 29.7624 61.1768 27.9624 63.3368 25.9944C62.5448 23.1144 61.9448 19.6224 61.5368 15.5184L57.1808 16.0944L56.8208 13.0344L61.2488 12.4944L61.0688 10.1904C60.9968 9.13437 60.9248 7.87437 60.8528 6.41037C60.7808 4.92237 60.7448 3.83037 60.7448 3.13437H63.9488C63.9488 4.31037 64.0568 6.75837 64.2728 10.4784L64.3808 12.0984L75.2528 10.7304L75.5768 13.7184L64.6328 15.1224C64.9208 18.3144 65.3408 21.1104 65.8928 23.5104C68.2208 20.9904 70.1408 18.3264 71.6528 15.5184L74.1008 17.1384C72.0608 20.7144 69.6368 23.9424 66.8288 26.8224C67.2608 28.0944 67.8128 29.2824 68.4848 30.3864C68.9648 31.1064 69.3848 31.5984 69.7448 31.8624C70.1288 32.1264 70.5128 32.2584 70.8968 32.2584C71.3048 32.2584 71.6168 32.0904 71.8328 31.7544C72.0728 31.3944 72.3008 30.7224 72.5168 29.7384C72.6848 28.9944 72.9488 27.5304 73.3088 25.3464L75.9728 26.4984ZM70.9328 10.7304C68.4128 8.16237 66.6848 6.45837 65.7488 5.61837L67.4768 3.63837C68.8208 4.76637 70.6208 6.43437 72.8768 8.64237L70.9328 10.7304ZM54.5888 30.4584C54.4688 30.2184 53.8568 29.1144 52.7528 27.1464C52.2248 26.2584 51.8888 25.6824 51.7448 25.4184C50.0888 28.8024 48.0608 31.9464 45.6608 34.8504L43.6808 32.2224C46.1048 29.3184 48.1568 25.9944 49.8368 22.2504C48.0368 19.2264 46.3088 16.4424 44.6528 13.8984L46.9568 12.2784C48.5648 14.7504 49.9808 16.9704 51.2048 18.9384C52.3088 15.9144 53.1128 12.8304 53.6168 9.68637H44.4008V6.69837H56.6048V9.75837C55.8368 14.2944 54.6968 18.4224 53.1848 22.1424C54.4568 24.2304 55.7528 26.4144 57.0728 28.6944L54.5888 30.4584Z"/>
                          <path d="M16.0288 11.4504L15.8848 16.2744H21.6448C21.3808 25.5864 21.2248 30.5784 21.1768 31.2504C21.0808 32.6664 20.7688 33.6384 20.2408 34.1664C19.7128 34.7184 18.7768 34.9944 17.4328 34.9944H15.0568L14.4808 32.0784H16.7488C17.3008 32.0784 17.6968 32.0064 17.9368 31.8624C18.1768 31.7184 18.3328 31.5144 18.4048 31.2504C18.4768 30.9864 18.5368 30.5544 18.5848 29.9544C18.6568 28.6584 18.7288 26.8944 18.8008 24.6624C18.8968 22.4304 18.9688 20.6184 19.0168 19.2264H15.7768C15.6568 22.0104 15.4408 24.3504 15.1288 26.2464C14.8408 28.1184 14.4208 29.8104 13.8688 31.3224C13.3408 32.8104 12.5968 34.3704 11.6368 36.0024L9.22479 34.5264C10.2568 32.7504 11.0368 31.0824 11.5648 29.5224C12.0928 27.9624 12.4648 26.2584 12.6808 24.4104C12.9208 22.5384 13.0888 20.0784 13.1848 17.0304L13.2928 11.4504H11.3848V8.53435H16.1728L14.9488 3.27835L17.8288 2.88235L19.1608 8.53435H22.5088V11.4504H16.0288ZM35.9008 10.2624H26.5408C26.0128 11.3904 25.4128 12.4944 24.7408 13.5744H34.6048V16.5264L30.7168 20.5944V22.0704H35.9008V24.9144H30.7168V31.5744C30.7168 32.6304 30.6088 33.4224 30.3928 33.9504C30.1768 34.4784 29.8048 34.8504 29.2768 35.0664C28.7488 35.2824 27.9688 35.3904 26.9368 35.3904H23.7688L23.1568 32.4744H25.4608C26.1808 32.4744 26.7088 32.4264 27.0448 32.3304C27.3808 32.2344 27.6088 32.0544 27.7288 31.7904C27.8488 31.5264 27.9088 31.1064 27.9088 30.5304V24.9144H22.7248V22.0704H27.9088V19.8744L31.1128 16.4544H24.3448V14.1864L23.3728 15.6264L21.2128 13.6824C22.2448 12.1944 23.2048 10.5144 24.0928 8.64235C25.0048 6.74635 25.7368 4.87435 26.2888 3.02636L29.2408 3.42235C28.8568 4.64635 28.4008 5.93035 27.8728 7.27435H35.9008V10.2624ZM9.29679 10.2264C7.35279 8.47435 5.76879 7.10635 4.54479 6.12235L6.30879 3.85436L9.44079 6.41035C9.94479 6.84235 10.4968 7.29835 11.0968 7.77835L9.29679 10.2264ZM8.93679 19.0824C7.71279 17.9784 5.96079 16.5024 3.68079 14.6544L5.40879 12.2424C6.99279 13.3704 8.78079 14.7984 10.7728 16.5264L8.93679 19.0824ZM7.56879 21.6024L9.40479 22.1784L10.4488 22.5384L6.88479 35.8224L3.96879 34.9944L7.56879 21.6024Z"/>
                        </mask>
                        <path d="M128.361 11.7384C127.329 12.8904 126.177 13.9824 124.905 15.0144L123.897 11.9544C125.073 11.0424 126.381 9.68637 127.821 7.88637C129.261 6.06237 130.425 4.31037 131.313 2.63037L133.941 3.67437C133.269 5.04237 132.393 6.50637 131.313 8.06637V19.5504H128.361V11.7384ZM145.641 10.5144H155.469V12.9984H145.641V16.2384H154.389V18.7224H134.121V16.2384H142.617V12.9984H132.861V10.5144H142.617V7.31037C140.217 7.50237 137.493 7.65837 134.445 7.77837L134.265 5.40237C140.433 5.13837 146.685 4.62237 153.021 3.85437L153.309 6.19437C150.981 6.50637 148.425 6.79437 145.641 7.05837V10.5144ZM151.509 21.3144V29.6304H148.413V23.8704H131.421V29.8104H128.325V21.3144H151.509ZM141.465 26.4624C141.393 27.3504 141.261 28.0704 141.069 28.6224C146.973 30.4944 151.653 32.0424 155.109 33.2664L153.849 36.0024C152.721 35.5944 149.601 34.5024 144.489 32.7264L139.701 31.0704C138.717 32.1024 137.157 32.9904 135.021 33.7344C132.885 34.5024 129.813 35.2584 125.805 36.0024L124.509 33.0864C128.205 32.4864 131.013 31.8984 132.933 31.3224C134.853 30.7464 136.185 30.0984 136.929 29.3784C137.697 28.6344 138.141 27.6744 138.261 26.4984L138.369 24.8424H141.573C141.573 25.3464 141.537 25.8864 141.465 26.4624Z" fill="#1E2427"/>
                        <path d="M95.3088 25.2024C94.6608 24.4584 93.5088 23.2824 91.8528 21.6744V35.8584H88.9368V22.1064C87.6168 25.0824 86.2008 27.6024 84.6888 29.6664L83.5008 26.2824C84.4608 24.9384 85.3848 23.3664 86.2728 21.5664C87.1848 19.7664 87.9648 17.9184 88.6128 16.0224H84.1128V13.0704H88.9368V8.53437C88.0488 8.70237 86.5128 8.96637 84.3288 9.32637L84.0048 6.44637C85.9488 6.15837 88.0608 5.78637 90.3408 5.33037C92.6208 4.85037 94.5648 4.35837 96.1728 3.85437L96.6768 6.69837C95.6448 7.03437 94.0368 7.44237 91.8528 7.92237V13.0704H96.7128V16.0224H91.8528V18.1464C92.7408 18.8664 93.6648 19.6824 94.6248 20.5944C95.6088 21.4824 96.4368 22.2864 97.1088 23.0064L95.3088 25.2024ZM113.237 4.75437V31.6104H115.685V34.5624H94.9128V31.6104H98.4408V4.75437H113.237ZM110.213 13.7544V7.67037H101.429V13.7544H110.213ZM101.429 22.5384H110.213V16.6344H101.429V22.5384ZM110.213 25.4544H101.429V31.6104H110.213V25.4544Z" fill="#1E2427"/>
                        <path d="M75.9728 26.4984C75.7808 27.7464 75.4328 29.3784 74.9288 31.3944C74.5688 32.8344 74.0288 33.9144 73.3088 34.6344C72.6128 35.3544 71.8088 35.7144 70.8968 35.7144C69.9368 35.7144 69.0608 35.4264 68.2688 34.8504C67.5008 34.2744 66.6608 33.2664 65.7488 31.8264C65.3648 31.2024 64.9088 30.2904 64.3808 29.0904C62.3648 30.8184 60.0968 32.4504 57.5768 33.9864L56.0288 31.3944C58.7408 29.7624 61.1768 27.9624 63.3368 25.9944C62.5448 23.1144 61.9448 19.6224 61.5368 15.5184L57.1808 16.0944L56.8208 13.0344L61.2488 12.4944L61.0688 10.1904C60.9968 9.13437 60.9248 7.87437 60.8528 6.41037C60.7808 4.92237 60.7448 3.83037 60.7448 3.13437H63.9488C63.9488 4.31037 64.0568 6.75837 64.2728 10.4784L64.3808 12.0984L75.2528 10.7304L75.5768 13.7184L64.6328 15.1224C64.9208 18.3144 65.3408 21.1104 65.8928 23.5104C68.2208 20.9904 70.1408 18.3264 71.6528 15.5184L74.1008 17.1384C72.0608 20.7144 69.6368 23.9424 66.8288 26.8224C67.2608 28.0944 67.8128 29.2824 68.4848 30.3864C68.9648 31.1064 69.3848 31.5984 69.7448 31.8624C70.1288 32.1264 70.5128 32.2584 70.8968 32.2584C71.3048 32.2584 71.6168 32.0904 71.8328 31.7544C72.0728 31.3944 72.3008 30.7224 72.5168 29.7384C72.6848 28.9944 72.9488 27.5304 73.3088 25.3464L75.9728 26.4984ZM70.9328 10.7304C68.4128 8.16237 66.6848 6.45837 65.7488 5.61837L67.4768 3.63837C68.8208 4.76637 70.6208 6.43437 72.8768 8.64237L70.9328 10.7304ZM54.5888 30.4584C54.4688 30.2184 53.8568 29.1144 52.7528 27.1464C52.2248 26.2584 51.8888 25.6824 51.7448 25.4184C50.0888 28.8024 48.0608 31.9464 45.6608 34.8504L43.6808 32.2224C46.1048 29.3184 48.1568 25.9944 49.8368 22.2504C48.0368 19.2264 46.3088 16.4424 44.6528 13.8984L46.9568 12.2784C48.5648 14.7504 49.9808 16.9704 51.2048 18.9384C52.3088 15.9144 53.1128 12.8304 53.6168 9.68637H44.4008V6.69837H56.6048V9.75837C55.8368 14.2944 54.6968 18.4224 53.1848 22.1424C54.4568 24.2304 55.7528 26.4144 57.0728 28.6944L54.5888 30.4584Z" fill="#1E2427"/>
                        <path d="M16.0288 11.4504L15.8848 16.2744H21.6448C21.3808 25.5864 21.2248 30.5784 21.1768 31.2504C21.0808 32.6664 20.7688 33.6384 20.2408 34.1664C19.7128 34.7184 18.7768 34.9944 17.4328 34.9944H15.0568L14.4808 32.0784H16.7488C17.3008 32.0784 17.6968 32.0064 17.9368 31.8624C18.1768 31.7184 18.3328 31.5144 18.4048 31.2504C18.4768 30.9864 18.5368 30.5544 18.5848 29.9544C18.6568 28.6584 18.7288 26.8944 18.8008 24.6624C18.8968 22.4304 18.9688 20.6184 19.0168 19.2264H15.7768C15.6568 22.0104 15.4408 24.3504 15.1288 26.2464C14.8408 28.1184 14.4208 29.8104 13.8688 31.3224C13.3408 32.8104 12.5968 34.3704 11.6368 36.0024L9.22479 34.5264C10.2568 32.7504 11.0368 31.0824 11.5648 29.5224C12.0928 27.9624 12.4648 26.2584 12.6808 24.4104C12.9208 22.5384 13.0888 20.0784 13.1848 17.0304L13.2928 11.4504H11.3848V8.53435H16.1728L14.9488 3.27835L17.8288 2.88235L19.1608 8.53435H22.5088V11.4504H16.0288ZM35.9008 10.2624H26.5408C26.0128 11.3904 25.4128 12.4944 24.7408 13.5744H34.6048V16.5264L30.7168 20.5944V22.0704H35.9008V24.9144H30.7168V31.5744C30.7168 32.6304 30.6088 33.4224 30.3928 33.9504C30.1768 34.4784 29.8048 34.8504 29.2768 35.0664C28.7488 35.2824 27.9688 35.3904 26.9368 35.3904H23.7688L23.1568 32.4744H25.4608C26.1808 32.4744 26.7088 32.4264 27.0448 32.3304C27.3808 32.2344 27.6088 32.0544 27.7288 31.7904C27.8488 31.5264 27.9088 31.1064 27.9088 30.5304V24.9144H22.7248V22.0704H27.9088V19.8744L31.1128 16.4544H24.3448V14.1864L23.3728 15.6264L21.2128 13.6824C22.2448 12.1944 23.2048 10.5144 24.0928 8.64235C25.0048 6.74635 25.7368 4.87435 26.2888 3.02636L29.2408 3.42235C28.8568 4.64635 28.4008 5.93035 27.8728 7.27435H35.9008V10.2624ZM9.29679 10.2264C7.35279 8.47435 5.76879 7.10635 4.54479 6.12235L6.30879 3.85436L9.44079 6.41035C9.94479 6.84235 10.4968 7.29835 11.0968 7.77835L9.29679 10.2264ZM8.93679 19.0824C7.71279 17.9784 5.96079 16.5024 3.68079 14.6544L5.40879 12.2424C6.99279 13.3704 8.78079 14.7984 10.7728 16.5264L8.93679 19.0824ZM7.56879 21.6024L9.40479 22.1784L10.4488 22.5384L6.88479 35.8224L3.96879 34.9944L7.56879 21.6024Z" fill="#1E2427"/>
                        <path d="M128.361 11.7384C127.329 12.8904 126.177 13.9824 124.905 15.0144L123.897 11.9544C125.073 11.0424 126.381 9.68637 127.821 7.88637C129.261 6.06237 130.425 4.31037 131.313 2.63037L133.941 3.67437C133.269 5.04237 132.393 6.50637 131.313 8.06637V19.5504H128.361V11.7384ZM145.641 10.5144H155.469V12.9984H145.641V16.2384H154.389V18.7224H134.121V16.2384H142.617V12.9984H132.861V10.5144H142.617V7.31037C140.217 7.50237 137.493 7.65837 134.445 7.77837L134.265 5.40237C140.433 5.13837 146.685 4.62237 153.021 3.85437L153.309 6.19437C150.981 6.50637 148.425 6.79437 145.641 7.05837V10.5144ZM151.509 21.3144V29.6304H148.413V23.8704H131.421V29.8104H128.325V21.3144H151.509ZM141.465 26.4624C141.393 27.3504 141.261 28.0704 141.069 28.6224C146.973 30.4944 151.653 32.0424 155.109 33.2664L153.849 36.0024C152.721 35.5944 149.601 34.5024 144.489 32.7264L139.701 31.0704C138.717 32.1024 137.157 32.9904 135.021 33.7344C132.885 34.5024 129.813 35.2584 125.805 36.0024L124.509 33.0864C128.205 32.4864 131.013 31.8984 132.933 31.3224C134.853 30.7464 136.185 30.0984 136.929 29.3784C137.697 28.6344 138.141 27.6744 138.261 26.4984L138.369 24.8424H141.573C141.573 25.3464 141.537 25.8864 141.465 26.4624Z" stroke="#1E2427" mask="url(#path-1-outside-1_29_2256)"/>
                        <path d="M95.3088 25.2024C94.6608 24.4584 93.5088 23.2824 91.8528 21.6744V35.8584H88.9368V22.1064C87.6168 25.0824 86.2008 27.6024 84.6888 29.6664L83.5008 26.2824C84.4608 24.9384 85.3848 23.3664 86.2728 21.5664C87.1848 19.7664 87.9648 17.9184 88.6128 16.0224H84.1128V13.0704H88.9368V8.53437C88.0488 8.70237 86.5128 8.96637 84.3288 9.32637L84.0048 6.44637C85.9488 6.15837 88.0608 5.78637 90.3408 5.33037C92.6208 4.85037 94.5648 4.35837 96.1728 3.85437L96.6768 6.69837C95.6448 7.03437 94.0368 7.44237 91.8528 7.92237V13.0704H96.7128V16.0224H91.8528V18.1464C92.7408 18.8664 93.6648 19.6824 94.6248 20.5944C95.6088 21.4824 96.4368 22.2864 97.1088 23.0064L95.3088 25.2024ZM113.237 4.75437V31.6104H115.685V34.5624H94.9128V31.6104H98.4408V4.75437H113.237ZM110.213 13.7544V7.67037H101.429V13.7544H110.213ZM101.429 22.5384H110.213V16.6344H101.429V22.5384ZM110.213 25.4544H101.429V31.6104H110.213V25.4544Z" stroke="#1E2427" mask="url(#path-1-outside-1_29_2256)"/>
                        <path d="M75.9728 26.4984C75.7808 27.7464 75.4328 29.3784 74.9288 31.3944C74.5688 32.8344 74.0288 33.9144 73.3088 34.6344C72.6128 35.3544 71.8088 35.7144 70.8968 35.7144C69.9368 35.7144 69.0608 35.4264 68.2688 34.8504C67.5008 34.2744 66.6608 33.2664 65.7488 31.8264C65.3648 31.2024 64.9088 30.2904 64.3808 29.0904C62.3648 30.8184 60.0968 32.4504 57.5768 33.9864L56.0288 31.3944C58.7408 29.7624 61.1768 27.9624 63.3368 25.9944C62.5448 23.1144 61.9448 19.6224 61.5368 15.5184L57.1808 16.0944L56.8208 13.0344L61.2488 12.4944L61.0688 10.1904C60.9968 9.13437 60.9248 7.87437 60.8528 6.41037C60.7808 4.92237 60.7448 3.83037 60.7448 3.13437H63.9488C63.9488 4.31037 64.0568 6.75837 64.2728 10.4784L64.3808 12.0984L75.2528 10.7304L75.5768 13.7184L64.6328 15.1224C64.9208 18.3144 65.3408 21.1104 65.8928 23.5104C68.2208 20.9904 70.1408 18.3264 71.6528 15.5184L74.1008 17.1384C72.0608 20.7144 69.6368 23.9424 66.8288 26.8224C67.2608 28.0944 67.8128 29.2824 68.4848 30.3864C68.9648 31.1064 69.3848 31.5984 69.7448 31.8624C70.1288 32.1264 70.5128 32.2584 70.8968 32.2584C71.3048 32.2584 71.6168 32.0904 71.8328 31.7544C72.0728 31.3944 72.3008 30.7224 72.5168 29.7384C72.6848 28.9944 72.9488 27.5304 73.3088 25.3464L75.9728 26.4984ZM70.9328 10.7304C68.4128 8.16237 66.6848 6.45837 65.7488 5.61837L67.4768 3.63837C68.8208 4.76637 70.6208 6.43437 72.8768 8.64237L70.9328 10.7304ZM54.5888 30.4584C54.4688 30.2184 53.8568 29.1144 52.7528 27.1464C52.2248 26.2584 51.8888 25.6824 51.7448 25.4184C50.0888 28.8024 48.0608 31.9464 45.6608 34.8504L43.6808 32.2224C46.1048 29.3184 48.1568 25.9944 49.8368 22.2504C48.0368 19.2264 46.3088 16.4424 44.6528 13.8984L46.9568 12.2784C48.5648 14.7504 49.9808 16.9704 51.2048 18.9384C52.3088 15.9144 53.1128 12.8304 53.6168 9.68637H44.4008V6.69837H56.6048V9.75837C55.8368 14.2944 54.6968 18.4224 53.1848 22.1424C54.4568 24.2304 55.7528 26.4144 57.0728 28.6944L54.5888 30.4584Z" stroke="#1E2427" mask="url(#path-1-outside-1_29_2256)"/>
                        <path d="M16.0288 11.4504L15.8848 16.2744H21.6448C21.3808 25.5864 21.2248 30.5784 21.1768 31.2504C21.0808 32.6664 20.7688 33.6384 20.2408 34.1664C19.7128 34.7184 18.7768 34.9944 17.4328 34.9944H15.0568L14.4808 32.0784H16.7488C17.3008 32.0784 17.6968 32.0064 17.9368 31.8624C18.1768 31.7184 18.3328 31.5144 18.4048 31.2504C18.4768 30.9864 18.5368 30.5544 18.5848 29.9544C18.6568 28.6584 18.7288 26.8944 18.8008 24.6624C18.8968 22.4304 18.9688 20.6184 19.0168 19.2264H15.7768C15.6568 22.0104 15.4408 24.3504 15.1288 26.2464C14.8408 28.1184 14.4208 29.8104 13.8688 31.3224C13.3408 32.8104 12.5968 34.3704 11.6368 36.0024L9.22479 34.5264C10.2568 32.7504 11.0368 31.0824 11.5648 29.5224C12.0928 27.9624 12.4648 26.2584 12.6808 24.4104C12.9208 22.5384 13.0888 20.0784 13.1848 17.0304L13.2928 11.4504H11.3848V8.53435H16.1728L14.9488 3.27835L17.8288 2.88235L19.1608 8.53435H22.5088V11.4504H16.0288ZM35.9008 10.2624H26.5408C26.0128 11.3904 25.4128 12.4944 24.7408 13.5744H34.6048V16.5264L30.7168 20.5944V22.0704H35.9008V24.9144H30.7168V31.5744C30.7168 32.6304 30.6088 33.4224 30.3928 33.9504C30.1768 34.4784 29.8048 34.8504 29.2768 35.0664C28.7488 35.2824 27.9688 35.3904 26.9368 35.3904H23.7688L23.1568 32.4744H25.4608C26.1808 32.4744 26.7088 32.4264 27.0448 32.3304C27.3808 32.2344 27.6088 32.0544 27.7288 31.7904C27.8488 31.5264 27.9088 31.1064 27.9088 30.5304V24.9144H22.7248V22.0704H27.9088V19.8744L31.1128 16.4544H24.3448V14.1864L23.3728 15.6264L21.2128 13.6824C22.2448 12.1944 23.2048 10.5144 24.0928 8.64235C25.0048 6.74635 25.7368 4.87435 26.2888 3.02636L29.2408 3.42235C28.8568 4.64635 28.4008 5.93035 27.8728 7.27435H35.9008V10.2624ZM9.29679 10.2264C7.35279 8.47435 5.76879 7.10635 4.54479 6.12235L6.30879 3.85436L9.44079 6.41035C9.94479 6.84235 10.4968 7.29835 11.0968 7.77835L9.29679 10.2264ZM8.93679 19.0824C7.71279 17.9784 5.96079 16.5024 3.68079 14.6544L5.40879 12.2424C6.99279 13.3704 8.78079 14.7984 10.7728 16.5264L8.93679 19.0824ZM7.56879 21.6024L9.40479 22.1784L10.4488 22.5384L6.88479 35.8224L3.96879 34.9944L7.56879 21.6024Z" stroke="#1E2427" mask="url(#path-1-outside-1_29_2256)"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_29_2256" x="0" y="0" width="158.969" height="40.6943" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="1"/>
                          <feGaussianBlur stdDeviation="1.5"/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.879939 0 0 0 0 0.874155 0 0 0 0 0.874155 0 0 0 0.19 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_2256"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_2256" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <svg className="feature-card-cdkey-connector feature-card-cdkey-connector-bottom-left" xmlns="http://www.w3.org/2000/svg" width="120" height="49" viewBox="0 0 120 49" fill="none" aria-hidden="true">
                  <path d="M119 0V26.5L97 48.5H0" stroke="#BAD7F5" strokeOpacity="0.14"/>
                </svg>
                <svg className="feature-card-cdkey-connector feature-card-cdkey-connector-bottom-right" xmlns="http://www.w3.org/2000/svg" width="119" height="49" viewBox="0 0 119 49" fill="none" aria-hidden="true">
                  <path d="M0.5 0V26.5L22.5 48.5H119.5" stroke="#BAD7F5" strokeOpacity="0.14"/>
                </svg>
              </div>
            </div>
          </div>
          <section className="faq-section">
            <h2 className="faq-title">常见问题</h2>
            <p className="faq-subtitle">副标题</p>
            <div className="faq-list">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <article key={item.question} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                    <button
                      className="faq-item-trigger"
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-item-icon" aria-hidden="true">
                        {isOpen ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M22.991 17.2578C23.4466 17.7134 23.4466 18.453 22.991 18.9086C22.5354 19.3635 21.7972 19.3638 21.3418 18.9086L14 11.5668L6.65823 18.9086C6.20281 19.3637 5.46457 19.3636 5.00906 18.9086C4.55348 18.453 4.55348 17.7134 5.00906 17.2578L13.1746 9.0922C13.6302 8.63659 14.3699 8.63659 14.8255 9.0922L22.991 17.2578Z" fill="white"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M22.991 10.7422C23.4466 10.2866 23.4466 9.54698 22.991 9.09136C22.5354 8.63649 21.7972 8.63625 21.3418 9.09136L14 16.4332L6.65823 9.09136C6.20281 8.6363 5.46457 8.63643 5.00906 9.09136C4.55348 9.54698 4.55348 10.2866 5.00906 10.7422L13.1746 18.9078C13.6302 19.3634 14.3699 19.3634 14.8255 18.9078L22.991 10.7422Z" fill="white"/>
                          </svg>
                        )}
                      </span>
                      <span className="faq-item-question">{item.question}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-item-content">
                        <p className="faq-item-answer">{item.answer}</p>
                      </div>
                    )}
                  </article>
                )
              })}
            </div>
            <div className="faq-bottom-logo">
              <img src="/image 202.png" alt="盖世游戏" className="faq-bottom-logo-image" />
              <p className="faq-bottom-logo-text">盖世游戏</p>
            </div>
            <div className="faq-bottom-headline">
              <HeroHeadlineBlock
                enText="Mac"
                zhText="也可以是游戏机"
                subtitle="客户端内测版本抢先体验开启"
                showDownloadButton
                onDownload={() => setShowDownload(true)}
              />
              </div>
              <div className="faq-bottom-panel">
                <LaserFlow
                  className="faq-bottom-panel-laser"
                  color="#B2FCFF"
                  horizontalSizing={0.9}
                  verticalSizing={2.8}
                  horizontalBeamOffset={0}
                  verticalBeamOffset={0.0}
                  wispDensity={1}
                  wispSpeed={15}
                  wispIntensity={7}
                  flowSpeed={0.35}
                  flowStrength={0.32}
                  fogIntensity={0.75}
                  fogScale={0.3}
                  fogFallSpeed={0.6}
                  decay={1.1}
                  falloffStart={1.2}
                />
              </div>
          </section>
        </div>
      </section>
    </main>
  )
}
