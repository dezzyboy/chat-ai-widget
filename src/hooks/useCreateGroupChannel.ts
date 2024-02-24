import { User } from '@sendbird/chat';
import {
  type GroupChannel,
  type SendbirdGroupChat,
  type GroupChannelCreateParams,
} from '@sendbird/chat/groupChannel';
import * as sendbirdSelectors from '@sendbird/uikit-react/sendbirdSelectors';
import { default as useSendbirdStateContext } from '@sendbird/uikit-react/useSendbirdStateContext';
import { useCallback, useEffect, useState } from 'react';

import { useConstantState } from '../context/ConstantContext';
import { useSbConnectionState } from '../context/SBConnectionContext';

export function useCreateGroupChannel(
  currentUser: User | null,
  botUser: User
): [GroupChannel | null, () => void, boolean] {
  const [channel, setChannel] = useState<GroupChannel | null>(null);
  const [creating, setCreating] = useState<boolean>(false);
  const store = useSendbirdStateContext();
  const sb: SendbirdGroupChat = store.stores.sdkStore.sdk as SendbirdGroupChat;
  const sendUserMessage = sendbirdSelectors.getSendUserMessage(store);
  const { createGroupChannelParams, instantConnect, firstMessageData } =
    useConstantState();
  const { setSbConnectionStatus, firstMessage } = useSbConnectionState();

  const createAndSetNewChannel = useCallback(async () => {
    if (!currentUser || !botUser) {
      return;
    }
    try {
      setCreating(true);
      const paramData =
        instantConnect && firstMessageData
          ? JSON.stringify({
              first_message_data: firstMessageData,
            })
          : undefined;
      const params: GroupChannelCreateParams = {
        name: createGroupChannelParams?.name,
        invitedUserIds: [currentUser.userId, botUser.userId],
        isDistinct: false,
        coverUrl: createGroupChannelParams?.coverUrl,
        data: paramData,
      };
      const groupChannel = await sb.groupChannel
        .createChannel(params)
        .then((channel: GroupChannel) => {
          setChannel(channel);
          return channel;
        });
      // We also send the first message to the newly created channel
      // if it has a valid string
      if (firstMessage !== '' && firstMessage != null) {
        await sendUserMessage(groupChannel, {
          message: firstMessage,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setCreating(false);
      setSbConnectionStatus('CONNECTED');
    }
    // we dont want to watchout for change of whole objects
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.userId, botUser?.userId, firstMessage]);

  useEffect(() => {
    // console.log('## useCreateGroupChannel: ', currentUser, botUser, sb);
    if (currentUser && botUser && sb) {
      // fixme: dont need to move this to an outer function,
      // it causes scope snapshot issues
      // this case is okay because there are only setters inside createAndSetNewChannel
      createAndSetNewChannel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.userId, botUser?.userId, firstMessage]);

  return [channel, createAndSetNewChannel, creating];
}
