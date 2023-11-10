// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse }: { reverse?: boolean }) => {
  const theme = useTheme();
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="icon logo" width="100" />
     *
     */
    <svg width="66" height="28" viewBox="0 0 66 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M52.7694 1.05138V7H51.6023V0.0922266H52.6774L52.7694 1.05138ZM56.1835 2.54084V2.63768C56.1835 3.00044 56.1383 3.33707 56.0479 3.64756C55.9608 3.95498 55.83 4.22398 55.6557 4.45455C55.4846 4.68204 55.2731 4.85881 55.0213 4.98485C54.7695 5.11089 54.4789 5.17391 54.1496 5.17391C53.8235 5.17391 53.5378 5.11704 53.2924 5.00329C53.0503 4.88647 52.8453 4.722 52.6774 4.50988C52.5095 4.29776 52.3739 4.04875 52.2706 3.76285C52.1705 3.47387 52.0995 3.15722 52.0575 2.81291V2.43939C52.0995 2.07356 52.1705 1.74155 52.2706 1.44335C52.3739 1.14515 52.5095 0.88845 52.6774 0.673254C52.8453 0.458059 53.0503 0.292051 53.2924 0.175231C53.5346 0.0584102 53.817 0 54.1399 0C54.4692 0 54.7614 0.0614844 55.0164 0.184453C55.2715 0.304348 55.4862 0.476504 55.6605 0.700922C55.8349 0.922266 55.9656 1.18972 56.0528 1.50329C56.14 1.81379 56.1835 2.15964 56.1835 2.54084ZM55.0164 2.63768V2.54084C55.0164 2.31028 54.9938 2.09662 54.9486 1.89987C54.9034 1.70004 54.8324 1.52481 54.7356 1.37418C54.6387 1.22354 54.5144 1.10672 54.3627 1.02372C54.2142 0.937637 54.035 0.894598 53.8251 0.894598C53.6185 0.894598 53.4409 0.928415 53.2924 0.996047C53.1439 1.06061 53.0196 1.1513 52.9195 1.26812C52.8194 1.38494 52.742 1.52174 52.6871 1.67852C52.6322 1.83224 52.5934 1.99978 52.5708 2.18116V3.07576C52.6096 3.2971 52.6758 3.5 52.7694 3.68445C52.863 3.86891 52.9954 4.01647 53.1665 4.12714C53.3408 4.23474 53.5636 4.28854 53.8348 4.28854C54.0447 4.28854 54.2238 4.2455 54.3723 4.15942C54.5209 4.07334 54.6419 3.95498 54.7356 3.80435C54.8324 3.65064 54.9034 3.47387 54.9486 3.27404C54.9938 3.07422 55.0164 2.8621 55.0164 2.63768Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M58.5466 1.04216V5.08169H57.3795V0.0922266H58.4933L58.5466 1.04216ZM60.1496 0.0599473L60.1399 1.09289C60.0688 1.08059 59.9914 1.07137 59.9074 1.06522C59.8267 1.05907 59.746 1.05599 59.6653 1.05599C59.4651 1.05599 59.2892 1.08366 59.1374 1.139C58.9857 1.19126 58.8582 1.26812 58.7548 1.36957C58.6548 1.46794 58.5773 1.58783 58.5224 1.72925C58.4675 1.87066 58.4352 2.02899 58.4255 2.20422L58.1592 2.22266C58.1592 1.90909 58.1915 1.61858 58.256 1.35112C58.3206 1.08366 58.4175 0.848485 58.5466 0.645586C58.679 0.442688 58.8436 0.284365 59.0406 0.170619C59.2407 0.0568731 59.4716 0 59.7331 0C59.8041 0 59.88 0.00614844 59.9607 0.0184453C60.0446 0.0307422 60.1076 0.0445762 60.1496 0.0599473Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M60.7305 2.64229V2.53623C60.7305 2.17655 60.7854 1.843 60.8951 1.53557C61.0049 1.22508 61.1631 0.956083 61.3697 0.72859C61.5796 0.498024 61.8346 0.319719 62.1349 0.193676C62.4384 0.0645586 62.7806 0 63.1615 0C63.5457 0 63.888 0.0645586 64.1882 0.193676C64.4917 0.319719 64.7484 0.498024 64.9582 0.72859C65.1681 0.956083 65.3279 1.22508 65.4376 1.53557C65.5474 1.843 65.6023 2.17655 65.6023 2.53623V2.64229C65.6023 3.00198 65.5474 3.33553 65.4376 3.64295C65.3279 3.95037 65.1681 4.21937 64.9582 4.44993C64.7484 4.67743 64.4933 4.85573 64.1931 4.98485C63.8928 5.11089 63.5522 5.17391 63.1712 5.17391C62.787 5.17391 62.4432 5.11089 62.1397 4.98485C61.8395 4.85573 61.5844 4.67743 61.3746 4.44993C61.1647 4.21937 61.0049 3.95037 60.8951 3.64295C60.7854 3.33553 60.7305 3.00198 60.7305 2.64229ZM61.8976 2.53623V2.64229C61.8976 2.86671 61.9218 3.07883 61.9702 3.27866C62.0187 3.47848 62.0945 3.65371 62.1978 3.80435C62.3012 3.95498 62.4335 4.07334 62.5949 4.15942C62.7564 4.2455 62.9485 4.28854 63.1712 4.28854C63.3875 4.28854 63.5748 4.2455 63.733 4.15942C63.8944 4.07334 64.0268 3.95498 64.1301 3.80435C64.2334 3.65371 64.3093 3.47848 64.3577 3.27866C64.4094 3.07883 64.4352 2.86671 64.4352 2.64229V2.53623C64.4352 2.31489 64.4094 2.10584 64.3577 1.90909C64.3093 1.70927 64.2318 1.5325 64.1253 1.37879C64.0219 1.22508 63.8896 1.10518 63.7282 1.0191C63.57 0.929952 63.3811 0.885375 63.1615 0.885375C62.942 0.885375 62.7515 0.929952 62.5901 1.0191C62.4319 1.10518 62.3012 1.22508 62.1978 1.37879C62.0945 1.5325 62.0187 1.70927 61.9702 1.90909C61.9218 2.10584 61.8976 2.31489 61.8976 2.53623Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M13.524 24.248H6.188L5.012 27.72H0L7.112 8.064H12.656L19.768 27.72H14.7L13.524 24.248ZM12.292 20.552L9.856 13.356L7.448 20.552H12.292Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M27.2805 14.308C27.7285 13.58 28.3725 12.992 29.2125 12.544C30.0525 12.096 31.0139 11.872 32.0965 11.872C33.3845 11.872 34.5512 12.1987 35.5965 12.852C36.6419 13.5053 37.4632 14.4387 38.0605 15.652C38.6765 16.8653 38.9845 18.2747 38.9845 19.88C38.9845 21.4853 38.6765 22.904 38.0605 24.136C37.4632 25.3493 36.6419 26.292 35.5965 26.964C34.5512 27.6173 33.3845 27.944 32.0965 27.944C30.9952 27.944 30.0339 27.7293 29.2125 27.3C28.3912 26.852 27.7472 26.264 27.2805 25.536V27.72H22.4925V7H27.2805V14.308ZM34.1125 19.88C34.1125 18.6853 33.7765 17.752 33.1045 17.08C32.4512 16.3893 31.6392 16.044 30.6685 16.044C29.7165 16.044 28.9045 16.3893 28.2325 17.08C27.5792 17.7707 27.2525 18.7133 27.2525 19.908C27.2525 21.1027 27.5792 22.0453 28.2325 22.736C28.9045 23.4267 29.7165 23.772 30.6685 23.772C31.6205 23.772 32.4325 23.4267 33.1045 22.736C33.7765 22.0267 34.1125 21.0747 34.1125 19.88Z"
        fill={theme.palette.primary.main}
      />
      <path d="M46.8444 7V27.72H42.0564V7H46.8444Z" fill={theme.palette.primary.main} />
      <path
        d="M65.6022 19.656C65.6022 20.104 65.5742 20.5707 65.5182 21.056H54.6822C54.7569 22.0267 55.0649 22.7733 55.6062 23.296C56.1662 23.8 56.8476 24.052 57.6502 24.052C58.8449 24.052 59.6756 23.548 60.1423 22.54H65.2383C64.9769 23.5667 64.5009 24.4907 63.8103 25.312C63.1383 26.1333 62.2889 26.7773 61.2622 27.244C60.2356 27.7107 59.0876 27.944 57.8182 27.944C56.2876 27.944 54.9249 27.6173 53.7302 26.964C52.5356 26.3107 51.6022 25.3773 50.9302 24.164C50.2582 22.9507 49.9222 21.532 49.9222 19.908C49.9222 18.284 50.2489 16.8653 50.9022 15.652C51.5742 14.4387 52.5076 13.5053 53.7022 12.852C54.8969 12.1987 56.2689 11.872 57.8182 11.872C59.3302 11.872 60.6743 12.1893 61.8503 12.824C63.0262 13.4587 63.9409 14.364 64.5943 15.54C65.2663 16.716 65.6022 18.088 65.6022 19.656ZM60.7022 18.396C60.7022 17.5747 60.4222 16.9213 59.8622 16.436C59.3022 15.9507 58.6022 15.708 57.7622 15.708C56.9596 15.708 56.2783 15.9413 55.7183 16.408C55.1769 16.8747 54.8409 17.5373 54.7102 18.396H60.7022Z"
        fill={theme.palette.primary.main}
      />
    </svg>
  );
};

export default LogoMain;
