// Layout Components - Sidebar
// 좌측 고정 사이드바 컴포넌트

import styles from './Sidebar.module.css';

interface NavItem {
  label: string;
  href: string;
}

interface SidebarProps {
  logo?: string;
  navigation?: NavItem[];
  phone?: string;
  email?: string;
}

export default function Sidebar({ logo, navigation = [], phone, email }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <a href="/">
          {logo ? <img src={logo} alt="Logo" /> : <span>PIUM</span>}
        </a>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <ul>
          {navigation.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Info */}
      <div className={styles.contact}>
        {phone && <a href={`tel:${phone}`} className={styles.phone}>{phone}</a>}
        {email && <a href={`mailto:${email}`} className={styles.email}>{email}</a>}
      </div>
    </aside>
  );
}
