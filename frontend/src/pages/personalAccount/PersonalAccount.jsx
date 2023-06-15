import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import styles from './PersonalAccount.module.scss';
import HeaderPersonalAccount from '../../components/headerPersonalAccount/HeaderPersonalAccount';
import NavbarPersonalAccount from '../../components/navbarPersonalAccount/NavbarPersonalAccount';
import PanelMainPersonalAccount from '../../components/panelMainPersonalAccount/PanelMainPersonalAccount';
import PanelNotificationsPersonalAccount from '../../components/panelNotificationsPersonalAccount/PanelNotificationsPersonalAccount';
import PanelGradePersonalAccount from '../../components/panelGradePersonalAccount/PanelGradePersonalAccount';
import PanelAchievementPersonalAccount from '../../components/panelAchievementPersonalAccount/PanelAchievementPersonalAccount';

function PersonalAccount() {
  return (
    <div className={styles.body}>
          <HeaderPersonalAccount />
          <div className={styles.wrapper_main}>
            <NavbarPersonalAccount />
            <main className={styles.setting_block}>
          <Routes>
              <Route path="PanelMain" element={<PanelMainPersonalAccount />} />
              <Route path="PanelNotifications" element={<PanelNotificationsPersonalAccount />} />
              <Route path="PanelGrade" element={<PanelGradePersonalAccount />} />
              <Route path="PanelAchievement" element={<PanelAchievementPersonalAccount />} />
         </Routes>   
            </main>
          </div>
        </div>
  );
}

export default PersonalAccount;
