import '../css/component/sidebar.css'

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  
} from "@material-ui/icons";
import ReportIcon from '@mui/icons-material/Report';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
           
            {/* <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/admin/analytics" className="link">
            <li className="sidebarListItem">
              <AutoGraphIcon className="sidebarIcon" />
              Analytics
            </li>
            </Link>
            {/* <Link to="/admin/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link> */}
            {/* <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li> */}
             <Link to="/admin/reports" className="link">
              <li className="sidebarListItem">
                <ReportIcon className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList"> */}
            {/* <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li> */}
            {/* promotional mail will be sent from here to all users */}
            {/* <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li> */}
            {/* <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li> */}
          {/* </ul> */}
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;