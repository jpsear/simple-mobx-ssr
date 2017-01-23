import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import Navigation from './Navigation';
import TopBar from './TopBar';
import Logo from '@images/vodafone-logo.png';
import SearchIcon from '@images/icons/search.svg';
import AvatarIcon from '@images/icons/avatar.svg';
import styles from './Header.scss';

@observer
@CSSModules(styles)
class Header extends Component {
  @observable hideHeader = false;
  @observable collapseLogo = false;

  componentWillMount() {
    document.onscroll = this.onScroll;
  }
  
	links() {
    return [
      'Shop',
      'Broadband',
      'TV',
      'Explore',
      'My Vodafone',
      'Support'
    ];
  }

	onScroll = () => {
    const body = document.body;

		if (body.scrollTop >= 29) {
			this.hideHeader = true;
      this.collapseLogo = true;
		}
    
    else if (body.scrollTop < 29) {
			this.hideHeader = false;
      this.collapseLogo = false;
		}
	}

  renderHeaderClassName() {
    if (this.hideHeader) {
      return 'header-hidden';
    }

    return 'header';
  }

  render() {
    let headerClass = this.hideHeader ? 'header-hidden' : 'header';
    let brandLinkClass = this.collapseLogo ? 'brand-link-collapsed' : 'brand-link';

    return (
      <div styleName={headerClass}>
        <div styleName="brand">
          <Link to="/" styleName={brandLinkClass}>
            <span styleName="rhombus"></span>
            <img styleName="logo" src={Logo} alt="Vodafone logo" />
          </Link>
        </div>

        <TopBar />
        <Navigation links={this.links()} />
      </div>
    );
  }
}

export default Header;
