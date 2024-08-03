'use client'
import "@public/styles/nav.css";

const Nav = () => {

    const handleNav = (active) => {
        // document.querySelector(".nav_a").style.fill = "#B8B8B8";
        // document.querySelector("#nav_"+active).style.fill = "#176FF2";
        
    }

  return (
    <>
        <div className="nav_container">

            <div className="nav_elements">
                <a href="/home" onClick={() => handleNav("home")}>
            <svg id="nav_home" className="nav_a" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M0.900002 11.713C0.900002 6.082 1.514 6.475 4.819 3.41C6.265 2.246 8.515 0 10.458 0C12.4 0 14.695 2.235 16.154 3.41C19.459 6.475 20.072 6.082 20.072 11.713C20.072 20 18.113 20 10.486 20C2.859 20 0.900002 20 0.900002 11.713Z" fill="url(#paint0_linear_0_155)"/>
<path d="M7.57969 14.1348H13.3947" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<defs>
<linearGradient id="paint0_linear_0_155" x1="19.8254" y1="14.4231" x2="0.190984" y2="14.1695" gradientUnits="userSpaceOnUse">
<stop stopColor="#176FF2"/>
<stop offset="1" stopColor="#196EEE"/>
</linearGradient>
</defs>
</svg>
                </a>
                <a  href="/tickets" onClick={() => handleNav("tickets")}>
                <svg id="nav_tickets" className="nav_a" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.8867 4.1886V6.00322" stroke="#B8B8B8" strokeWidth="1.34971" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.8867 14.3186V15.8363" stroke="#B8B8B8" strokeWidth="1.34971" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.8867 11.7412V8.12622" stroke="#B8B8B8" strokeWidth="1.34971" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M15.5272 15.9986C16.8935 15.9986 18.0001 14.9057 18.0001 13.5564V11.6125C17.0961 11.6125 16.368 10.8934 16.368 10.0006C16.368 9.10778 17.0961 8.38796 18.0001 8.38796L17.9993 6.44322C17.9993 5.09395 16.8919 4.0011 15.5265 4.0011H5.47696C4.11148 4.0011 3.00408 5.09395 3.00408 6.44322L3.0033 8.4513C3.90736 8.4513 4.63546 9.10778 4.63546 10.0006C4.63546 10.8934 3.90736 11.6125 3.0033 11.6125V13.5564C3.0033 14.9057 4.10992 15.9986 5.47618 15.9986H15.5272Z" stroke="#B8B8B8" strokeWidth="1.34971" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </a>
                <a href="/likes" onClick={() => handleNav("likes")}>
                <svg id="nav_likes" className="nav_a" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_0_165" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="3" y="3" width="15" height="15">
<path fillRule="evenodd" clipRule="evenodd" d="M3.5 3.7674H17.8964V17.4806H3.5V3.7674Z" fill="white"/>
</mask>
<g mask="url(#mask0_0_165)">
<path fillRule="evenodd" clipRule="evenodd" d="M4.7839 10.1815C5.76979 13.2488 9.66484 15.729 10.7 16.3429C11.7386 15.7227 15.6618 13.2151 16.616 10.1843C17.2426 8.22515 16.661 5.74354 14.3503 4.99884C13.2308 4.63951 11.9249 4.8582 11.0234 5.55578C10.835 5.70064 10.5734 5.70346 10.3835 5.56C9.42857 4.84203 8.18108 4.63177 7.044 4.99884C4.73679 5.74284 4.15734 8.22444 4.7839 10.1815ZM10.6994 17.48C10.6122 17.48 10.5257 17.4589 10.4469 17.416C10.2268 17.2957 5.0421 14.4379 3.77844 10.5042C3.77774 10.5042 3.77774 10.5035 3.77774 10.5035C2.98452 8.02679 3.86775 4.91441 6.71924 3.99532C8.05814 3.56214 9.51729 3.75271 10.6973 4.49741C11.8407 3.77451 13.3596 3.5748 14.6718 3.99532C17.5261 4.91581 18.4121 8.02749 17.6196 10.5035C16.3967 14.3922 11.174 17.2929 10.9525 17.4146C10.8738 17.4582 10.7866 17.48 10.6994 17.48Z" fill="#B8B8B8"/>
</g>
<path fillRule="evenodd" clipRule="evenodd" d="M14.8584 9.12954C14.5862 9.12954 14.3556 8.92069 14.3331 8.64503C14.2867 8.067 13.8999 7.57898 13.3493 7.40106C13.0715 7.31105 12.9197 7.0136 13.009 6.73724C13.0997 6.46018 13.3943 6.30969 13.6728 6.39689C14.6313 6.707 15.3028 7.55577 15.3851 8.55924C15.4083 8.84967 15.1924 9.10423 14.902 9.12743C14.8872 9.12884 14.8732 9.12954 14.8584 9.12954Z" fill="#B8B8B8"/>
</svg>

                </a>
                <a href="/profile" onClick={() => handleNav("profile")}>
                <svg id="nav_profile" className="nav_a" width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M7.4873 11.7885C4.26428 11.7885 1.5119 12.2758 1.5119 14.2274C1.5119 16.179 4.24682 16.6837 7.4873 16.6837C10.7103 16.6837 13.4619 16.1956 13.4619 14.2448C13.4619 12.294 10.7278 11.7885 7.4873 11.7885Z" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7.4873 9.00492C9.60238 9.00492 11.3167 7.28984 11.3167 5.17476C11.3167 3.05968 9.60238 1.3454 7.4873 1.3454C5.37222 1.3454 3.65714 3.05968 3.65714 5.17476C3.65 7.2827 5.35317 8.99778 7.46032 9.00492H7.4873Z" stroke="#B8B8B8" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </a>
            </div>

        </div>
    </>
  )
}

export default Nav

