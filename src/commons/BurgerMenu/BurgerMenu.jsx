import { slide as Menu } from 'react-burger-menu';
import telegram from './../icons/menu-icons/telegram.svg';
import instagram from './../icons/menu-icons/instagram.svg';
import facebook from './../icons/menu-icons/facebook.svg';
import './BurgerMenu.scss';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';

const BurgerMenu = ({ items }) => {
	const getMenuItems = items.map((item, index) => <a href="#" className="menu-item" key={index}>{item}</a>);
	const MenuRef = useRef();
	const getWidth = num => window.innerWidth / num;
	const changeMenuSize = width => MenuRef.current.querySelector('.bm-menu').style.width = width + 'px';

	useLayoutEffect(() => {
		if(MenuRef.current) changeMenuSize(getWidth(1.9));
	}, []);
	useEffect(() => {
	
		const onResize = window.addEventListener('resize', () => {
			let num = 0;
			const windowWidth = window.innerWidth;

			if(windowWidth >= 1438) num = 1.9;
			if(windowWidth >= 1024 && windowWidth <= 1437) num = 1.6;
			if(windowWidth <= 1023) num = 1;
			changeMenuSize(getWidth(num));
		});

		return () => window.removeEventListener('resize', onResize);
	}, [])
	return (
		<div ref={MenuRef}>
			<Menu >
				<div className="bm-wrapper" >
					{getMenuItems}
					<div className="bm-wrapper-icons">
						<img src={telegram} alt=""/>
						<img src={facebook} alt="" />
						<img src={instagram} alt="" />
					</div>
					<div className="bm-wrapper-lang">
						Eng
					</div>
				</div>
			</Menu>
		</div>
	)
}

export default BurgerMenu;