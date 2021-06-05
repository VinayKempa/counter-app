import React, { useMemo, useState } from "react";

const menu = [
  {
    items: [
      {
        name: "Home",
        route: "/",
      },
      {
        name: "Home 2",
        route: "/",
      },
      {
        name: "Content",
        route: "/content",
      },
      {
        name: "Menu 1",
        children: [
          {
            name: "Sub Menu 1",
            children: [
              {
                name: "SSMenu 1",
                route: "/ssmenu1",
              },
            ],
          },
          {
            name: "Sub Menu 2",
            route: "/submenu2",
          },
        ],
      },
    ],
  },
  {
    title: "Group Heading",
    items: [
      {
        name: "Home",
        route: "/",
      },
      {
        name: "Content",
        route: "/content",
      },
      {
        name: "Menu 1",
        children: [
          {
            name: "Sub Menu 1",
            children: [
              {
                name: "SSMenu 1",
                route: "/ssmenu1",
              },
            ],
          },
          {
            name: "Sub Menu 2",
            route: "/submenu2",
          },
        ],
      },
    ],
  },
];

const SideNav_ = () => {
  //layoutSidenav_nav -> app-sidenav-wrapper, accordion
  return (
    <div className="app-sidenav-wrapper">
      <nav className="app-sidenav-content">
        <div className="app-sidenav-menu">
          {menu.map((group, index) => {
            return (
              <React.Fragment>
                {group.title && (
                  <p className="nav-header-title">{group.title}</p>
                )}
                <ul className="nav">
                  {group.items.map((item, index) => {
                    return (
                      <li
                        className="nav-item"
                        key={`menu_${item.name}_${index}`}
                      >
                        <MenuItem item={item} />
                      </li>
                    );
                  })}
                </ul>
              </React.Fragment>
            );
          })}
          {/* <ul className="nav">
            {menu.map((item, index) => {
              return (
                <li className="nav-item" key={`menu_${item.name}_${index}`}>
                  <MenuItem item={item} />
                </li>
              );
            })}
          </ul> */}
        </div>
        <div className="app-sidenav-footer">
          <div className="small">Logged in as:</div>
          Start Bootstrap
        </div>
      </nav>
    </div>
  );
};

const MenuItem = ({ item }) => {
  const hasChildren = useMemo(() => {
    return item && item.children && item.children.length ? true : false;
  }, item);
  if (hasChildren) {
    return <MenuItemWithChild item={item} />;
  } else {
    return (
      <a href="#" className="nav-link">
        {item.name}
      </a>
    );
  }
};
const MenuItemWithChild = ({ item }) => {
  const [isExpand, setExpand] = useState(false);
  return (
    <React.Fragment>
      <p
        className={`nav-link has-children ${
          (isExpand && "is-open") || ""
        }`.trim()}
        onClick={() => setExpand(!isExpand)}
      >
        <span className="nav-link-title">{item.name}</span>
      </p>
      <ul className={`nav ${isExpand ? "opened" : "closed"}`.trim()}>
        {((item && item.children) || []).map((subItem, index) => {
          return (
            <li className="nav-item" key={`menu_${subItem.name}_${index}`}>
              <MenuItem item={subItem} />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default SideNav_;
