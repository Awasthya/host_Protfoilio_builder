
import React, { useState, useEffect, useRef } from 'react';
import Cropper from 'react-easy-crop';
import './profile.css';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import getCroppedImg  from '../../../utils/cropImage';
import { dataURLtoFile } from '../../../utils/dataURLtoFile';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
function Avatar(props) {

    
  const inputRef = new useRef();

  const [croppedArea , setCroppedArea] = new useState(null);
  const [profile,setImage] = new useState(props.profile);
  const [crop, setCrop] = useState({x:0,y:0});
  const [zoom, setZoom] = useState(1);
  const [flag, setFlag] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const triggerFileSelectPopup = () => inputRef.current.click();
    const onCropComplete = (croppedAreaPercentage, croppedAreaPixel ) => {
        //console.log(croppedAreaPixel);
        setCroppedArea(croppedAreaPixel);
          
        setFlag(false);
    }
    const onSelectFile = (e) => {
        setShowCropper(true);
        if(e.target.files && e.target.files.length > 0){
          const reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.addEventListener('load', () => {
              setImage(reader.result);
          })
        }
      }
      const changeState = () => {
        setImage(null);
        setShowCropper(false);
      }

      const onUpload = async() => {
            const canvas = await getCroppedImg(profile,croppedArea);
            const canvasUrl = canvas.toDataURL("image/jpeg");

            const convertedUrlToFile =  dataURLtoFile(canvasUrl ,'profileImage.jpeg');
            //console.log( convertedUrlToFile);
            try{
                const formdata = new FormData();
                formdata.append("AvatarprofileImage",convertedUrlToFile);
                const res = await fetch(`/upload/profilePicture/${props.id}`, {
                    method : "POST",
                    body : formdata,
                });
                const res2 = await res.json();
                setImage(res2.data);
                setShowCropper(false);
            }catch (err) {
                console.warn(err);
            }
            
      }
      useEffect(()=>{
      },[showCropper])
  return (
    <div className = "avatar" enctype="multipart/form-data">
        {showCropper ? 
                <>
                <div className="container-cropper">
                  <div className="cropper">
                    <Cropper image = {profile}  crop = {crop} aspect = {1} zoom = {zoom} onCropChange = {setCrop} onZoomChange={setZoom} onCropComplete={onCropComplete} />
                  </div>
                    <div className="slider">
                      <Slider min = {1} max = {3} step={0.1} value={zoom} onChange={(e,zoom) => setZoom(zoom )}   />
                    </div>
                    <div className="profileButton">
                      <input type='button' className='decisionButton' onClick = {changeState} value = "Cancel" />
                      <input type='button' className='decisionButton' onClick = {onUpload} value = "Upload" />
                    </div>
                    </div>
                </>
                : null}
        <div className='profile-picture'>
                    <img src={props.profile} alt="Profileimage" name= "croppedImage" className="profile-picture-background"/>
                    <input type="file" accept='image/*' ref={inputRef} style ={{display : 'none'}} onChange = {onSelectFile} />
                    <div className={props.visitor === 'false' ? "" : "Invisible" }>
                    <Button varient='container' color='secondary' className="editButton" onClick = {triggerFileSelectPopup}> 
                        <div className="cameraIcon" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                          <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
                          <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                        </svg>
                        </div>
                    </Button>
                    </div>
            </div>
    </div>
  )
}

export default Avatar