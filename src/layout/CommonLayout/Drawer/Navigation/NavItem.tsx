import { ForwardRefExoticComponent, RefAttributes, forwardRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project-imports
import { dispatch, useSelector } from '../../../../store';
import { activeComponent, openComponentDrawer } from '../../../../store/reducers/menu';

// types
import { ThemeMode } from '../../../../types/config';
import { LinkTarget, NavItemType } from '../../../../types/menu';

// ==============================|| NAVIGATION - ITEM ||============================== //

interface Props {
  item: NavItemType;
  level: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const NavItem = ({ item, level }: Props) => {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const { openComponent } = useSelector((state) => state.menu);

  let itemTarget: LinkTarget = '_self';
  if (item.target) {
    itemTarget = '_blank';
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  const CustomLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
    <Link {...props} ref={ref} />
  ));

  let listItemProps: {
    component: ForwardRefExoticComponent<RefAttributes<HTMLAnchorElement>> | string;
    href?: string;
    target?: LinkTarget;
  } = {
    component: CustomLink,
    href: item.url,
    target: itemTarget,
  };
  if (item?.external) {
    listItemProps = { component: 'a', href: item.url, target: itemTarget };
  }

  const itemHandler = (id: string) => {
    dispatch(activeComponent({ openComponent: id }));
    if (matchesMD) {
      dispatch(openComponentDrawer({ componentDrawerOpen: false }));
    }
  };

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      dispatch(activeComponent({ openComponent: item.id }));
    }
    // eslint-disable-next-line
  }, []);

  const textColor = theme.palette.mode === ThemeMode.DARK ? 'secondary.400' : 'secondary.main';
  const iconSelectedColor = theme.palette.mode === ThemeMode.DARK ? 'text.primary' : 'primary.main';

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      onClick={() => itemHandler(item.id!)}
      selected={openComponent === item.id}
      sx={{ pl: 2.5, py: 1, mb: 0.5 }}
    >
      <ListItemText
        primary={
          <Typography
            variant="h6"
            sx={{
              color: openComponent === item.id ? iconSelectedColor : textColor,
              fontWeight: 500,
            }}
          >
            {item.title}
          </Typography>
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

export default NavItem;
