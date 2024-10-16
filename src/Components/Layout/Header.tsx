

interface HeaderProps {
  className: string;
  bgVideoClassName: string;
  headerContainerClass: string;
}
export default function Header({ className, headerContainerClass }: HeaderProps) {
  

  return (
    <header className={headerContainerClass}>
      <section
        className={`${className} position-absolute top-0 left-0`}
      ></section>
     
    </header>
  );
}