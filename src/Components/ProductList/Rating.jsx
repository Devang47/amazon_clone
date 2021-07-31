function Rating({ stars }) {
  return [1, 2, 3, 4, 5].map(v => (
    <>
      {stars > v ? (
        <span
          class="iconify"
          data-icon="ant-design:star-filled"
          data-inline="false"
          data-height="20px"
          style={{ color: '#abd31d' }}
        ></span>
      ) : stars >= v - 0.5 ? (
        <span
          class="iconify"
          data-icon="bi:star-half"
          data-inline="false"
          data-height="20px"
          style={{ color: '#abd31d' }}
        ></span>
      ) : (
        <span
          class="iconify"
          data-icon="akar-icons:star"
          data-inline="false"
          data-height="20px"
          style={{ color: '#abd31d' }}
        ></span>
      )}
    </>
  ));
}

export default Rating;
