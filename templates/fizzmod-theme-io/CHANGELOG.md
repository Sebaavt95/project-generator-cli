# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- refactor code to include custom functionalities in steps modules.
- Checkout minicart prices validation

### Fixed

- Summary and minicart components styles

### Changed

- Changes on StoreData module
- Directories checked and reorganized
- Deleted unnecessary files and functions

### Removed

- Layouts/BasicLayout.js, Layouts/index.js, Layouts/MainLayout.js, Layouts/PortalLayout.js
- Swiper dependency
- remove unused dependencies

## [1.2.0] - 2021-03-17

### Added

- validations for svgName and svg
- tryRequire function
- defaultProp for svgName prop
- CheckoutHeader and CheckoutFooter components in Cart, checkout and OrderPlaced
- CheckoutMinicart component in checkout

### Changed

- svg constant for a validation with the new function
- Styled-components was updated to last version v.5.2.1
- refactor src/styles folder

### Removed

- "default" property of svg object in dangerouslySetInnerHTML
- "isRequired" property in svgName prop

### Fixed

- avoid error in console when a .svg has as name "undefined" or when an icon component does not have `svgName="name"` as prop
- EmptyIcon in EmptySearch, for InputSearch is now rendered
- ListShelf component title, brand and image is now a link to product page

## [1.2.0] - 2021-01-19

### Added

- grid and list view in list pages
- add skeleton for list product
- Integration with notistack provider for custom notification messages
- Notifications for actions of products with cart
- Redux module for handle orderForm
- GlobalLayout for global initializers
- Added custom links to the header menu
- Handlebars custom helper matchWith
- Order changed email
- Order shipping finished email
- @researchgate/react-intersection-observer package
- useIntersectionCb hook
- Customizable LazyImage component to lazy load any image
- Institutional page: stores with google maps
- Dinamic date in checkout footer

### Changed

- replaced react-id-swiper library by swiper/react
- Product page: desktop image view slider effect to "Fade"
- Quantity selector inputs for add to cart are now editables
- Checkout, Myaccount page and login popup texts using Typography mixin
- links used in the header menu will come from a custom element
- Coupon component styles
- sorted items in collection placeholders
- refactor FeaturedProducts banners layout in quarters
- Replaced image in ProductShelf for LazyImage to lazy load shelf-template images

### removed

- react-id-swiper from package.json

### Fixed

- sticky view when product is out of stock
- UserLists Page: Price showed in ListBox
- Pagination and fade effect swiper modules
- cart substitutes and terms and conditions labels
- Swiper Regular bullets when there are more than 5 slides
- padding top for body on mobile
- typos in coupon messages
- emails shipping-info hardcoded data
- Header no longer covers the body
- UserLists Page: googleMaps script included in fit-shopping-lists html template
- My Account: adding SnackbarProvider into PortalLayout

## [1.1.0] - 2020-10-30

### Changed

- AddCart and QuantitySelector components unification in all site
- useAddToCart hooks functions and how to use it
- Store selector package update to v1.4.4
- Shelf-template now has only the skuId. Removed everything else because is unnecesary
- Change grey color of storeSelector's selects

### Added

- AddToCart component
- installment calculator
- Modify store selector select styles
- Modified store selector header button height
- Modified height from store selector popup
- Changed height of store picker popup map
- Apply styles to checkout selects
- Added styles to checkout's popup login
- Stores data from Master Data

### Fixed

- getFirstAvailablePrices util and used in Details and StickyProduct
- textPriceToNumber util validations
- sticky view when product is out of stock
- blurred images in orders module from myaccount

### Fixed

- Changed z-index of pickup modal in checkout

## [1.0.0] - 2020-10-9

### Changed

- Styled components restructuring
- Updated mails palette with Fizzmod colors..
- Checkout styles
- groupable filters by department
- refactor filters utils
- Menu takes data from Md to order and hide categories.
- ImageFlags and TagFlags flags propType

### Fixed

- vtexcommerce-order-shipped.html header handlebars
- StickyProduct bug when product has more than one sku

### Added

- Abandoned cart template and styles.
- Typography component used across all pages and components.
- Fit-login template
- Search module with local cache (functions skus and products)
- disabled eslint rule for forbidden proptypes

## [0.21.0] - 2020-09-28

### Added

- Add Flag custom

## [0.20.0] - 2020-09-10

### Changed

- update webpack 4.44.1
- update redux 4.0.5
- update eslint-plugin-react 7.20.6
- update eslint-plugin-prettier 3.1.4
- update react-redux 7.2.1 (updated latest to use redux hooks)
- update raw loader 4.0.1
- update prettier 1.19.1
- update eslint-plugin-babel 5.3.1
- update eslint-plugin-import 2.22.0
- update eslint-plugin-jsx-a11y 6.3.1
- update normalizr 3.6.0
- update enzyme 3.11.0
- update enzyme-adapter-react-16 1.15.4
- update enzyme-to-json 3.5.0
- update babel-eslint 10.1.0
- update babel/polyfill 7.11.5
- update fizzmod/minicart 1.11.2
- update core-js 3.6.5
- update babel-plugin-styled-component 1.11.1
- update babel/plugin-syntax-dynamic-import 7.8.3
- update babel/plugin-transform-runtime 7.11.5
- Folder name modules to redux.

### Fixed

- Empty product page in products without stock
- Callcenter toolbar covering the header
- Weightable product prices in all views

## [0.19.0] - 2020-09-03

### Changed

- Adjusted space between links on header
- Change popup login close icon
- Updated @fizzmod/order-info-substitutes package to version 2.0.0

### Added

- .svg icons used by the Svg component
- Storybook library for documentation
- @fizzmod/order-form-custom-data package installed
- Fizzmod and Vtex Links in checkout-footer.html
- Link component
- Shopping Lists

### Removed

- library Docz

### Fixed

- Subcategories not cleaning after department changing
- Bug pushState was being called when going backwards

## [0.18.0] - 2020-08-21

### Added

- Typography styles to the theme
- Overline variant on typography component
- Store selector: Autoselection of state and/or store in case there's only one option available.
- Store selector: added connection to store selector state on addToCart hook. Implemented in shelf and product view.
- Typography mixins for sass styling
- Installed react-router-dom package
- Installed react-sticky-el package
- Functionality of add to cart products from header search results

### Fixed

- DefaultShelf changed its height when no PPUMPrice was rendered
- Added Google maps Api key for PRD ENV.
- Zipcode input fixed problem with NaN values
- Solved Stickybar @ product view overlapped with site header
- PPUMPrice position in Minicart

## [0.17.0] - 2020-08-07

### Added

- Installed order-info-substitutes package
- Made possible to filter by attribute the products to be fetched by API Search at list views.
- SkeletonMobile in Header
- customParams prop to Swiper components
- getCurrentSalesChannel in utils/vtex.js
- salesChannel param in hooks/useAddToCart.js
- Mobile styles to Login popup
- login object to ENV
- Substitutes in cart page
- Store selector component
- Store selector module

### Changed

- initVtexLogin to use login from ENV
- Darker grey colors.

### Fixed

- Bug NavigationMobile moving between Categories when swiping
- Subcategory page renders subcategory banner, if it doesn't exist renders category banner.

## [0.16.0] - 2020-07-13

### Added

- Checkout shipping: addresses selector styles

### Changed

- get and parse collections products
- Products validation in collections sliders
- Store name, phone, networks
- Search and category: condicional rendering on quantity label while loading

### Fixed

- styles in navigation menu items with icons
- Removed sanitizeString duplicated function in department categories
- Scroll bug in empty Search page
- Fizzmod and Vtex logos render in Footer using bottomLinks.json
- All Warnings in all pages

### Fixed

- listPrice with renders validation of showListPrice util

### Added

- showListPrice and textPriceToNumber utils

## [0.15.0] - 2020-07-03

### Changed

- Related products in product page
- Specifications table styles
- Institutionals pages: deleted unnecesary files and change Faqs, contact and default institutional
- Darker grey colors in text and buttons in cart.
- Footer's width in cart, checkout and orderplaced.
- @fizzmod/master-data package in useNewsletter.js and contact.js
- Navigation menu styles

### Fixed

- fix of styles and colors
- Bug with categories and brands filters

### Added

- Sku selector
- Color selector (by similar products)
- booleanToNumber util
- Function fot get active department and categorie from navigation menu

### Removed

- Logo Mercadopago from summary in checkout.
- utils/master-data.js
- vendor.js in fit-home.html, fit-departament.html, fit-product.html

## [0.14.0] - 2020-06-12

### Added

- Terms and condition in cart.
- Size guide (or size table) in product page
- Master-data package in package.json

### Changed

- Logo Fizzmod in cart and checkout.
- Changed README.md with more useful info.

## [0.13.0] - 2020-05-01

### Added

- Checkout unauthorized Modal
- Checkout checkout identified user modal
- Checkout checkout unavailable products modal
- Terms and conditions in cart

### Fixed

- add id root to credit card modal on Myaccount.

## [0.12.0] - 2020-03-2

### Fixed

- wrong links en some titles column from footer

### Added

- Component for SocialLinks

## [0.11.0] - 2020-03-30

- Add ppum price

## [0.10.0] - 2020-03-30

### Changed

- Changed header logo using Svg component.

### Changed

- change icons in the footer on each email.
- Changed header colors.

### Added

- Svg component

## [0.9.0] - 2020-03-30

### Added

- parseUrlfromCart for add productos from email cart abandoned and utms.

### Changed

- Updated palette with Fizzmod colors.

## [0.8.0] - 2020-02-26

### Changed

- Typography theme variables for each variant style.
- Orderplaced from native Vtex to Custom with React.

## [0.7.0] - 2020-02-10

### Added

- Components ExtraLogos, LogoRender and new svg card components

### Changed

- PaymentMethods component styles, and card components styles structure

### Removed

- Useless svg card components

## [0.6.0] - 2020-02-10

### Added

- New documentation for setup

### Fixed

- unexpected character when deploy subtemplate fit-head with uploader.

### Changed

- url for Vtex assets in vtex uploader config.

## [0.5.0] - 2020-02-08

### Added

- Component ErrorBoundary, documentation and test.

## [0.4.2] - 2019-01-31

### Added

- Component Typography and test.

### Fixed

- fix id subtemplate in Department html.
- remove repeat common.css from html views.
- SETUP-FIT.md

### Changed

- README.md

## [0.3.2] - 2019-01-08

### Fixed

- change destructure param from function to save newsletter option.

## [0.3.1] - 2019-01-07

### Remove

- component CustomFilter from home view.s

## [0.2.1] - 2019-01-03

### Changed

- Readme
- Add build for prod and QA.
- Add variables for build

## [0.1.1] - 2019-12-19

### Changed

- Fix version.

## [0.1.0] - 2019-12-19

### Added

- First release.
