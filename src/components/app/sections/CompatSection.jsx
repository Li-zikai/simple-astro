import { useI18n } from "@/i18n/context"
import {
  CompatDinputIcon,
  CompatEnvIcon,
  CompatGamePathIcon,
  CompatLanguageIcon,
  CompatLaunchArgsIcon,
  CompatLayerIcon,
  CompatMetalHudIcon,
  CompatPlanIcon,
  CompatSkipVideoIcon,
  CompatSyncModeIcon,
} from "@/components/app/AppPageSectionIcons"

export function CompatSection() {
  const { t } = useI18n()

  return (
    <section className="compat-section">
      <h2 className="compat-title">{t.compat.title}</h2>
      <p className="compat-desc">{t.compat.desc}</p>
      <div className="compat-cards">
        <div className="compat-card">
          <h3 className="compat-card-title">{t.compat.leftCard.title}</h3>
          <p className="compat-card-desc">{t.compat.leftCard.desc}</p>
          <div className="compat-inner-box">
            <div className="compat-inner-box-content">
              <div className="compat-setting-item">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatLanguageIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.leftCard.language.title}</span>
                  <span className="compat-setting-desc">{t.compat.leftCard.language.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatMetalHudIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.leftCard.metalHud.title}</span>
                  <span className="compat-setting-desc">{t.compat.leftCard.metalHud.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatEnvIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.leftCard.env.title}</span>
                  <span className="compat-setting-desc">{t.compat.leftCard.env.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item compat-setting-item-last">
                <div className="compat-setting-row">
                  <span className="compat-setting-icon compat-setting-icon-boxed">
                    <CompatLaunchArgsIcon />
                  </span>
                  <div className="compat-setting-text">
                    <span className="compat-setting-title">{t.compat.leftCard.launchArgs.title}</span>
                    <span className="compat-setting-desc">{t.compat.leftCard.launchArgs.desc}</span>
                  </div>
                </div>
                <div className="compat-setting-input">
                  <span className="compat-setting-input-text">{t.compat.leftCard.inputPlaceholder}</span>
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
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatGamePathIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.leftCard.gamePath.title}</span>
                  <span className="compat-setting-desc">{t.compat.leftCard.gamePath.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatLanguageIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.leftCard.language.title}</span>
                  <span className="compat-setting-desc">{t.compat.leftCard.language.desc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="compat-card">
          <h3 className="compat-card-title">{t.compat.rightCard.title}</h3>
          <p className="compat-card-desc">{t.compat.rightCard.desc}</p>
          <div className="compat-inner-box-right">
            <div className="compat-inner-box-right-content">
              <div className="compat-setting-item">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatPlanIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.rightCard.plan.title}</span>
                  <span className="compat-setting-desc">{t.compat.rightCard.plan.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatLayerIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.rightCard.layer.title}</span>
                  <span className="compat-setting-desc">{t.compat.rightCard.layer.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatSyncModeIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.rightCard.syncMode.title}</span>
                  <span className="compat-setting-desc">{t.compat.rightCard.syncMode.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item compat-setting-item-dinput">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatDinputIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.rightCard.dinput.title}</span>
                  <span className="compat-setting-desc">{t.compat.rightCard.dinput.desc}</span>
                </div>
              </div>
              <div className="compat-setting-item">
                <span className="compat-setting-icon compat-setting-icon-boxed">
                  <CompatSkipVideoIcon />
                </span>
                <div className="compat-setting-text">
                  <span className="compat-setting-title">{t.compat.rightCard.skipVideo.title}</span>
                  <span className="compat-setting-desc">{t.compat.rightCard.skipVideo.desc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
