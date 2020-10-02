const Configuration = {
  Testing: {
    AWS: {
      identityPoolId: 'us-west-2:800823782926',
      region: 'us-west-2',
      userPoolId: 'us-west-2_NT53GSxvt',
      userPoolWebClientId: '2ohsq40l3qdij61450npgbdg96',

      oauth: {
        domain: 'qewd-infra-test-user.auth.us-west-2.amazoncognito.com',
        scope: [
          'phone',
          'email',
          'profile',
          'openid',
          'aws.cognito.signin.user.admin',
        ],
        redirectSignIn: 'myapp://',
        redirectSignOut: 'myapp://',
        responseType: 'code',
      },
    },
  },

  Stagging: {
    AWS: {
      identityPoolId: 'us-west-2:a06f9221-e200-41d0-a30f-f6326dbfb95c',
      region: 'us-west-2',
      userPoolId: 'us-west-2_nGnLeWv8L',
      userPoolWebClientId: '4o8too79cfntq3qoti8bl9tpnk',

      oauth: {
        domain: 'headstart.auth.us-west-2.amazoncognito.com',
        scope: [
          'phone',
          'email',
          'profile',
          'openid',
          'aws.cognito.signin.user.admin',
        ],
        redirectSignIn: 'myapp://',
        redirectSignOut: 'myapp://',
        responseType: 'code',
      },
    },
  },

  Production: {
    AWS: {
      identityPoolId: 'us-west-2:a06f9221-e200-41d0-a30f-f6326dbfb95c',
      region: 'us-west-2',
      userPoolId: 'us-west-2_nGnLeWv8L',
      userPoolWebClientId: '4o8too79cfntq3qoti8bl9tpnk',

      oauth: {
        domain: 'headstart.auth.us-west-2.amazoncognito.com',
        scope: [
          'phone',
          'email',
          'profile',
          'openid',
          'aws.cognito.signin.user.admin',
        ],
        redirectSignIn: 'myapp://',
        redirectSignOut: 'myapp://',
        responseType: 'code',
      },
    },
  },
};

export default Configuration.Testing;
