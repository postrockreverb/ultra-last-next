import { Button, Flex, Text, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';
import { IconHeart } from '@tabler/icons-preact';

const useLikeColor = (isLiked: boolean | undefined) => {
  const theme = useMantineTheme();
  if (isLiked) {
    return theme.fn.themeColor('pink');
  }
  if (theme.colorScheme === 'light') {
    return theme.fn.themeColor('gray');
  }
  return theme.fn.lighten(theme.fn.themeColor('gray'), 0.6);
};

interface LikeProps {
  count: number;
  isLiked?: boolean;
  onLike?: () => void;
  onUnlike?: () => void;
}

export const Like = ({ isLiked: _isLiked, onLike, onUnlike, count: _likes }: LikeProps) => {
  const [likes, setLikes] = useState(_likes ?? 0);
  const [isLiked, setIsLiked] = useState(_isLiked);

  const likeColor = useLikeColor(isLiked);

  useEffect(() => {
    if (_likes !== undefined) {
      setLikes(_likes);
      setIsLiked(_isLiked);
    }
  }, [_likes, _isLiked]);

  const onLikeClick = () => {
    if (!isLiked) {
      onLike?.();
      setIsLiked(true);
      setLikes((likes) => likes + 1);
    }

    if (isLiked) {
      onUnlike?.();
      setIsLiked(false);
      setLikes((likes) => likes - 1);
    }
  };

  return (
    <Button
      radius="lg"
      size="sm"
      variant="subtle"
      compact
      color={isLiked ? 'pink' : 'gray'}
      onClick={onLikeClick}
      styles={(theme) => ({
        root: {
          transitionDuration: '200ms',
          '&:not([data-disabled])': theme.fn.hover({
            backgroundColor: theme.fn.themeColor('pink') + '50',
          }),
        },
      })}
    >
      <Flex align="center" gap="4px">
        <Text fw="200">{likes}</Text>
        <IconHeart size="18" stroke="1.5" color={likeColor} />
      </Flex>
    </Button>
  );
};
