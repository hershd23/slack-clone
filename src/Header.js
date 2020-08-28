import React from 'react';
import './Header.css';

import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
	return (
		<div className="header">
			<div className='header__left'>

				<Avatar 
					className="header__avatar"
					alt={"Hersh Dhillon"}
					src={""}
				/>
				
				<AccessTimeIcon />

			</div>
			<div className="header__search">
				<SearchIcon />

				<input placeholder="Search Slack Clone" />
			</div>
			<div classname="header__right">
				<HelpOutlineIcon />
			</div>
		</div>
	)
}

export default Header
