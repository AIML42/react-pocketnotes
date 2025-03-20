import React, { useEffect, useState } from 'react'
import './GroupHeadingStyle.css'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentGroupId } from '../../redux/slices/groupSlices'

const GroupHeading = () => {

    const allGroups = useSelector((state) => {
        return state.group.groups;
    })
    const currentGroupId = useSelector((state) => {
        return state.group.selectedGroupId;
    })

    const dispatch = useDispatch();

    // console.log(allGroups, currentGroupId);

    const setActiveGroup = (id) => {
        dispatch(setCurrentGroupId(id));
    }

    const windowWidth = useSelector((state) => state.ui.windowWidth);

    const isMobile = windowWidth < 700;
    const shouldHideButton = isMobile && currentGroupId;


    return (
        <div className='groups-heading'>

            {/* Reading from group state */}

            {allGroups && allGroups.map((singleGroup) => {
                // console.log(singleGroup);
                return (
                    <div style={{ display: shouldHideButton ? "none" : "flex" }}
                        onClick={() => setActiveGroup(singleGroup.id)}
                        key={singleGroup.id}
                        className={`group-heading 
                        ${currentGroupId === singleGroup.id ? "selected-group" : ""}
                        `}>
                        <div style={{ backgroundColor: `${singleGroup.color}` }} className="group-dp">
                            <h3>{singleGroup.displayPicture}</h3>
                        </div>
                        <h3>{singleGroup.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default GroupHeading