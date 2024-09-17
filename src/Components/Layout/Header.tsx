import videoFile from '../../Assets/videos/file.mp4';
// import imgHeader from '../../Assets/imgHeader.jpg';

interface HeaderProps {
  className: string;
  bgVideoClassName: string;
  headerContainerClass: string;
}
export default function Header({ className, bgVideoClassName, headerContainerClass }: HeaderProps) {

  return (
    <header className={headerContainerClass}>
      <video
        src={videoFile}
        className={`${bgVideoClassName} position-absolute top-0 left-0`}
        autoPlay
        loop
        muted
      />
      <section className={`${className} position-absolute top-0 left-0`}>
        {/* <div className="securityCameraImg position-absolute top-0"></div> */}
        {/* <img src={imgHeader} alt="" /> */}
        {/* <div className="headerLogo d-flex flex-column">
           
            <h1 className="m-0">MES</h1>
            <p className="m-0 ps-2">Mega Elektro Security</p>
          </div>  */}
      </section>
    </header>
  );
}