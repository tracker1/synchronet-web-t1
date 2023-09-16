/**
 * Get newUser questions/options to use.
 * 
 * Route Handler - Single function statement to use for route
 */
(function getNewUserOptions(ctx) {
  var newUserOptions = load('modopts.js', 'newuser');

  ctx.res.json(Object.assign(
    // defaults
    {
      // will send a verification code via email, this must be used to create the account
      emailPreverify: true,

      // will generate and email the password assigned to the account at creation
      // should not be used with emailPreverify
      emailPassphrase: false,

      // are user accounts even allowed to be created?
      allowNewUser: !(system.settings & SYS_CLOSED),

      // is a new user password required to create an account (invitational)
      newUserPassword: !!system.newuser_password.length,

      // new user questions - configured via scfg
      alias: !!(system.newuser_questions & UQ_ALIASES),
      realName: !!(system.newuser_questions & UQ_REALNAME),
      realNameDup: !!(system.newuser_questions & UQ_DUPREAL),
      handle: !!(system.newuser_questions & UQ_HANDLE),
      handleDup: !!(system.newuser_questions & UQ_DUPHAND),
      birthDate: !!(system.newuser_questions & UQ_BIRTH),
      email: !(system.newuser_questions & UQ_NONETMAIL),
      phone: !!(system.newuser_questions & UQ_PHONE),
      sex: !!(system.newuser_questions & UQ_SEX),
      address: !!(system.newuser_questions & UQ_ADDRESS),
      location: !!(system.newuser_questions & UQ_LOCATION),
      locationCommas: !(system.newuser_questions & UQ_NOCOMMAS),
      company: !!(system.newuser_questions & UQ_COMPANY),
      allowExtendedAscii: !(system.newuser_questions & UQ_NOEXASC),
      shell: !!(system.newuser_questions & UQ_CMDSHELL),
      editor: !!(system.newuser_questions & UQ_XEDIT),
      askDefaults: !(system.newuser_questions & UQ_NODEF),
      noUpperLowerForced: !!(system.newuser_questions & UQ_NOUPRLWR),
      colorTerm: !!(system.newuser_questions & UQ_COLORTERM),

      // [newuser] from modopts.ini
      sendWelcome: !!newUserOptions.send_welcome,
      askQnet: !!newUserOptions.ask_qnet,
      qnetName: newUserOptions.qnet_name,
      qwkSettings: newUserOptions.qwk_settings,
      askSysop: !!newUserOptions.ask_sysop,
      survey: newUserOptions.survey,
      avatar: newUserOptions.avatar,
      avatarFile: newUserOptions.avatar_file,
      avatarOffset: newUserOptions.avatar_offset,
    },

    // [createuserweb] from modopts.ini - override non-web values
    load('modopts.js', 'createuserweb')
  ));
});