import Image from "next/image";

const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div>
        <div>
          <Image
            src="https://links.papareact.com/f90"
            alt="image"
            width={150}
            height={40}
          />
        </div>
      </div>
      {/* Bottom Nav */}
      <div></div>
    </header>
  );
};

export default Header;
