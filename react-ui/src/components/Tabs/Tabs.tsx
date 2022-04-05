import styles from './Tabs.module.css';

const CustomTabs = (prop: any) => {
  const { onClickHandler, value } = prop;

  const menus = [
    { name: 'Examples', value: 'examples' },
    { name: 'API', value: 'api' },
    { name: 'CSS', value: 'css' },
    { name: '', value: '' },
    { name: '', value: '' },
  ];

  const renderMenus = () => {
    return menus?.map((menu, index) => {
      const isMenuActive = value === menu?.value;
      return (
        <div
          className={`${styles.tabMenu} ${isMenuActive && styles.isActive}`}
          key={index}
          onClick={e => {
            menu.value && onClickHandler(menu?.value);
          }}
        >
          {menu?.name}
        </div>
      );
    });
  };

  return <div className={`${styles.tabWrapper}`}>{renderMenus()}</div>;
};

export default CustomTabs;
