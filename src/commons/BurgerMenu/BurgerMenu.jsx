import { slide as Menu } from 'react-burger-menu';
import telegram from './../icons/menu-icons/telegram.svg';
import instagram from './../icons/menu-icons/instagram.svg';
import facebook from './../icons/menu-icons/facebook.svg';
import './BurgerMenu.scss';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import nextId from 'react-id-generator';

const BurgerMenu = ({ items }) => {
	const getMenuItems = items.map(item => {
		const keyId = nextId();

		return <a href="#" className="menu-item" key={keyId}>{item}</a>
	})
	const MenuRef = useRef();
	const getWidth = num => window.innerWidth / num;
	const changeMenuSize = width => {
		if(!MenuRef.current) return;
		
		MenuRef.current.querySelector('.bm-menu').style.width = width + 'px';
	} 

	useLayoutEffect(() => {
		if(MenuRef.current) changeMenuSize(getWidth(1.9));
	}, []);
	useLayoutEffect(() => {
		
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
						<a href="#"><img src={telegram} alt="telegram"/></a>
						<a href="#"><img src={facebook} alt="facebook"/></a>
						<a href="#"><img src={instagram} alt="instagram"/></a>
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