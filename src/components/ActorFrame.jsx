import { IMAGE_URL_SM, IMG_PLACEHOLDER } from "../utils";

const ActorFrame = ({actorData}) => {
    return ( 
        <div className="flex flex-col justify-center items-center text-center">
            <div className="w-36">
                <img src={actorData?.profile_path ? IMAGE_URL_SM + actorData?.profile_path : IMG_PLACEHOLDER} className='w-full rounded-lg' alt="" />
            </div>
            <h1>{actorData?.name}</h1>
        </div>
     );
}
 
export default ActorFrame;