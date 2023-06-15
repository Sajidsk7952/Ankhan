// import { useState } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { AppId, ServerSecret } from "./config";
import { ZegoSuperBoardManager } from "zego-superboard-web";
const RoomPage = () => {
  const { roomId } = useParams();
  const meeting = (element) => {
    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      AppId,
      ServerSecret,
      roomId,
      Date.now().toString(),
      Date.now().toString()
    );
    const cloud=ZegoUIKitPrebuilt.create(token)
    cloud.addPlugins({ZegoSuperBoardManager});
    cloud.joinRoom({
        container: element,
        sharedLinks:[{
            name:'personal Link',
            url:window.location.href,
        }],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall
        },
        maxUsers:2,
        showPreJoinView:true,
        whiteboardConfig:{
            showAddImageButton:true,
        }
    })
    
  };
  return (
    <div ref={meeting} style={{ width: '100vw', height: '100vh' }}>
    </div>
  );
};
export default RoomPage;