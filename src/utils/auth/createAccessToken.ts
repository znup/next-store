import { cookies } from 'next/headers';
import { GraphQLClientSingleton } from 'app/graphql';
import { customerAccessTokenCreateMutation } from 'app/graphql/mutations/customerAccessTokenCreate';

export const createAccessToken = async (email: string, password: string) => {
  const cookieStore = cookies();
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const { customerAccessTokenCreate }: any = await graphqlClient.request(
    customerAccessTokenCreateMutation,
    {
      email: email,
      password: password,
    }
  );
  const { accessToken, expiresAt } =
    customerAccessTokenCreate?.customerAccessToken;

  if (accessToken) {
    cookieStore.set('accessToken', accessToken, {
      path: '/',
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: 'strict',
    });
  }
};
