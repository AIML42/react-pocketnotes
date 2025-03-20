import React, { useState, useEffect } from 'react'
import './GroupPageStyle.css'
import notesIntro from "../../assets/intro/notes_intro.png";
import lock from "../../assets/vector/lock.png";
import GroupHeading from '../../components/GroupHeading/GroupHeading';
import CreateGroupModal from '../../components/CreateGroupModal/CreateGroupModal';
import { useSelector } from 'react-redux';
import MainNotesSection from '../../components/Notes/MainNotesSection';

const GroupPage = () => {

    const [addGroup, setAddGroup] = useState(false);
    const windowWidth = useSelector((state) => state.ui.windowWidth);
    const currentGroupId = useSelector((state) => {
        return state.group.selectedGroupId;
    })

 

      const isMobile = windowWidth < 700;
      const shouldHideButton = isMobile && currentGroupId;
      

    return (
        <>
            <div className="main-note-page">

                <div className="groups-section">
                    <h2 style={{display:shouldHideButton ? "none":"block"}} >Pocket Notes</h2>
                    <button style={{visibility:shouldHideButton ? "hidden":"visible"}}
                    onClick={() => setAddGroup(!addGroup)} className='group-add-button'></button>
                    {!currentGroupId ? <span className='encryption-message'>
                        <img src={lock} alt="" />
                        <h6>end-to-end encrypted</h6>
                    </span>: null}

                    <GroupHeading />
                </div>

                {currentGroupId ? <MainNotesSection/> :   <div className="notes-section">
                    <img src={notesIntro} alt="" />
                    <h1>Pocket Notes</h1>
                    <div className="text-section">
                        <h4>Send and receive messages without keeping your phone online.
                            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</h4>
                    </div>

                </div>}
               

            </div>

            {addGroup && <CreateGroupModal setAddGroup={setAddGroup}/>}
        </>

    )
}

export default GroupPage