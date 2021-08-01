function Rating({ stars }) {
  return [1, 2, 3, 4, 5].map(v => (
    <>
      {stars > v ? (
        <span
          className="iconify"
          data-icon="ant-design:star-filled"
          data-inline="false"
          data-height="22px"
          style={{ color: '#ffa41c' }}
        ></span>
      ) : stars >= v - 0.5 ? (
        <span
          className="iconify"
          data-icon="bi:star-half"
          data-inline="false"
          data-height="20px"
          style={{ color: '#ffa41c' }}
        ></span>
      ) : (
        <span
          className="iconify"
          data-icon="akar-icons:star"
          data-inline="false"
          data-height="20px"
          style={{ color: '#ffa41c' }}
        ></span>
      )}
    </>
  ));
}

export default Rating;
