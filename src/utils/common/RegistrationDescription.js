import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';

function LeftNavMenu(props) {
    return (
        <Fragment>
            <ul>
                {
                    props.disableLeftNavMenu ?
                    <Fragment>
                        <li><a className={props.showForm && props.activeMenu == "nid" ? "activated" : ""} href="#">{props.nidTitle}</a></li>
                        <li><a className={props.showForm && props.activeMenu == "birthReg" ? "activated" : ""} href="#">{props.birthRegTitle}</a></li>
                        <li><a className={props.showForm && props.activeMenu == "passport" ? "activated" : ""} href="#">{props.passportTitle}</a></li>
                    </Fragment>
                    :
                    <Fragment>
                        <li><NavLink className={props.showForm && props.activeMenu == "nid" ? "activated" : ""} to={props.nidLink}>{props.nidTitle}</NavLink></li>
                        <li><NavLink className={props.showForm && props.activeMenu == "birthReg" ? "activated" : ""} to={props.birthRegLink}>{props.birthRegTitle}</NavLink></li>
                        <li><NavLink className={props.showForm && props.activeMenu == "passport" ? "activated" : ""} to={props.passportLink}>{props.passportTitle}</NavLink></li>
                    </Fragment>
                }
            </ul>
            <div className="app-link">
                <a href="https://play.google.com/store/apps/details?id=com.codersbucket.surokkha_app" target="_blank"><img src={require('../../assets/images/Surrokkha Advertisement card.jpg')} alt="" /></a>
            </div>
        </Fragment>
    )
}

export default LeftNavMenu
