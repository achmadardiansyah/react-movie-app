import { Oval } from 'react-loader-spinner';

const Loading = () => {
    return ( 
        <div className=' h-[85vh] w-full flex justify-center items-center'>
            <Oval
                height={100}
                width={100}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </div>
     );
}
 
export default Loading;