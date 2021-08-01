import React from 'react';
import products from '../../Data/products/index';
import Filters from './Filters';
import ProductItem from './ProductItem';

function ProductList() {
  return (
    <section className="productListSearchPage">
      <Filters />
      <section className="right_section">
        <div className="productList">
          {products.map(pdt => (
            <ProductItem key={pdt.id} product={pdt} />
          ))}
        </div>
      </section>
    </section>
  );
}

export default ProductList;

// function ProductList() {
//   return (
//     <section className="productListSearchPage">
//       {Filters}
//       <section className="right_section">
//         <div className="productList">
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(e => {
//             return (
//               <React.Fragment key={e}>
//                 <div className="item">
//                   <div className="featured_product_img">
//                     <img
//                       src="https://m.media-amazon.com/images/I/81j8i9slKIL._AC_UY327_QL65_.jpg"
//                       alt="product"
//                     />
//                   </div>
//                   <div className="details">
//                     <h2 className="title">
//                       World’s Greatest Classics (Box Set of 4 Books)
//                     </h2>
//                     <h3 className="description">
//                       by Jane Austen F. Scott Fitzgerald, Oscar Wilde, Emily
//                       Brontë | 1 February 2021
//                     </h3>
//                     <div className="rating">
//                       ⭐⭐⭐⭐⭐ - <span className="reviews">23</span>
//                     </div>
//                     <div className="paperback">Paperback</div>
//                     <div className="limited_deal">Limited time deal</div>
//                     <div className="cost">
//                       <span className="currency_sign">₹</span>
//                       500
//                       <span className="strike">1200</span>
//                     </div>
//                     <div className="delivery_time">
//                       Get it by <strong> Tomorrow, July 29 </strong>
//                     </div>
//                     <div className="free_delivery">FREE Delivery by Amazon</div>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="featured_product_img">
//                     <img
//                       src="https://m.media-amazon.com/images/I/71frknp-CWL._AC_UY327_QL65_.jpg"
//                       alt="product"
//                     />
//                   </div>
//                   <div className="details">
//                     <h2 className="title">
//                       World’s Greatest Classics (Box Set of 4 Books)
//                     </h2>
//                     <h3 className="description">
//                       by Jane Austen F. Scott Fitzgerald, Oscar Wilde, Emily
//                       Brontë | 1 February 2021
//                     </h3>
//                     <div className="rating">
//                       ⭐⭐⭐⭐⭐ - <span className="reviews">23</span>
//                     </div>
//                     <div className="paperback">Paperback</div>
//                     <div className="limited_deal">Limited time deal</div>
//                     <div className="cost">
//                       <span className="currency_sign">₹</span>200
//                       <span className="strike">392</span>
//                     </div>
//                     <div className="delivery_time">
//                       Get it by <strong> Tomorrow, July 29 </strong>
//                     </div>
//                     <div className="free_delivery">FREE Delivery by Amazon</div>
//                   </div>
//                 </div>
//                 <div className="item">
//                   <div className="featured_product_img">
//                     <img
//                       src="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_QL65_.jpg"
//                       alt="product"
//                     />
//                   </div>
//                   <div className="details">
//                     <h2 className="title">
//                       World’s Greatest Classics (Box Set of 4 Books)
//                     </h2>
//                     <h3 className="description">
//                       by Jane Austen F. Scott Fitzgerald, Oscar Wilde, Emily
//                       Brontë | 1 February 2021
//                     </h3>
//                     <div className="rating">
//                       ⭐⭐⭐⭐⭐ - <span className="reviews">23</span>
//                     </div>
//                     <div className="paperback">Paperback</div>
//                     <div className="limited_deal">Limited time deal</div>
//                     <div className="cost">
//                       <span className="currency_sign">₹</span>109
//                       <span className="strike">500</span>
//                     </div>
//                     <div className="delivery_time">
//                       Get it by <strong> Tomorrow, July 29 </strong>
//                     </div>
//                     <div className="free_delivery">FREE Delivery by Amazon</div>
//                   </div>
//                 </div>
//               </React.Fragment>
//             );
//           })}
//         </div>
//       </section>
//     </section>
//   );
// }
