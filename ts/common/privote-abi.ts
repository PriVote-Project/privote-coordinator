export const PRIVOTE_ABI = [
  {
    inputs: [
      {
        internalType: "contract IPollFactory",
        name: "_pollFactory",
        type: "address",
      },
      {
        internalType: "contract IMessageProcessorFactory",
        name: "_messageProcessorFactory",
        type: "address",
      },
      {
        internalType: "contract ITallyFactory",
        name: "_tallyFactory",
        type: "address",
      },
      {
        internalType: "contract IBasePolicy",
        name: "_signUpPolicy",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_stateTreeDepth",
        type: "uint8",
      },
      {
        internalType: "uint256[5]",
        name: "_emptyBallotRoots",
        type: "uint256[5]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AnonAadhaarCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "AnonAadhaarPolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "EASCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "EASPolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20CheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20PolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20VotesCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC20VotesPolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "EndTimeMustBeAfterStartTime",
    type: "error",
  },
  {
    inputs: [],
    name: "FreeForAllCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "FreeForAllPolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "GitcoinCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "GitcoinPolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "HatsCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "HatsPolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidFactoryAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPolicyAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPublicKey",
    type: "error",
  },
  {
    inputs: [],
    name: "LeafAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "LeafCannotBeZero",
    type: "error",
  },
  {
    inputs: [],
    name: "LeafGreaterThanSnarkScalarField",
    type: "error",
  },
  {
    inputs: [],
    name: "MerkleCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "MerklePolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
    ],
    name: "PollDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "PollNotTallied",
    type: "error",
  },
  {
    inputs: [],
    name: "PoseidonHashLibrariesNotLinked",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "SemaphoreCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "SemaphorePolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "StartTimeMustBeInFuture",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenPolicyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "TooManySignups",
    type: "error",
  },
  {
    inputs: [],
    name: "UserNotSignedUp",
    type: "error",
  },
  {
    inputs: [],
    name: "VoiceCreditProxyFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ZupassCheckerFactoryNotSet",
    type: "error",
  },
  {
    inputs: [],
    name: "ZupassPolicyFactoryNotSet",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "AnonAadhaarFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newFactory",
        type: "address",
      },
    ],
    name: "ConstantVoiceCreditProxyFactoryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_pollId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_coordinatorPublicKeyX",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_coordinatorPublicKeyY",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
    ],
    name: "DeployPoll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "EASFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "ERC20FactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "ERC20VotesFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "FreeForAllFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "GitcoinFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "HatsFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "MerkleFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "poll",
            type: "address",
          },
          {
            internalType: "address",
            name: "messageProcessor",
            type: "address",
          },
          {
            internalType: "address",
            name: "tally",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct IMACI.PollContracts",
        name: "pollContracts",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string[]",
        name: "options",
        type: "string[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "optionInfo",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "policy",
        type: "address",
      },
    ],
    name: "PollCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "SemaphoreFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_stateIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_userPublicKeyX",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_userPublicKeyY",
        type: "uint256",
      },
    ],
    name: "SignUp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "TokenFactoriesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newCheckerFactory",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPolicyFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newPolicyFactory",
        type: "address",
      },
    ],
    name: "ZupassFactoriesUpdated",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "MESSAGE_DATA_LENGTH",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_polls",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "pollDeployer",
        type: "address",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "policy",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "anonAadhaarCheckerFactory",
    outputs: [
      {
        internalType: "contract IAnonAadhaarCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "anonAadhaarPolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "constantVoiceCreditProxyFactory",
    outputs: [
      {
        internalType: "contract ConstantInitialVoiceCreditProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_policy",
        type: "address",
      },
      {
        internalType: "address",
        name: "_initialVoiceCreditProxy",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
    ],
    name: "createPoll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poll",
            type: "address",
          },
          {
            internalType: "address",
            name: "messageProcessor",
            type: "address",
          },
          {
            internalType: "address",
            name: "tally",
            type: "address",
          },
        ],
        internalType: "struct IMACI.PollContracts",
        name: "pollContracts",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_anonAadhaarVerifier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_nullifierSeed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithAnonAadhaar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_easContract",
        type: "address",
      },
      {
        internalType: "address",
        name: "_attester",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_schema",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithEAS",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_threshold",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_snapshotBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithERC20Votes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithFreeForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_passportDecoder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_thresholdScore",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithGitcoin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_hatsProtocol",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_criterionHats",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithHats",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "bytes32",
        name: "_merkleRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithMerkle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_semaphoreContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_groupId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithSemaphore",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "_options",
        type: "string[]",
      },
      {
        internalType: "bytes[]",
        name: "_optionInfo",
        type: "bytes[]",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
      {
        internalType: "enum DomainObjs.Mode",
        name: "_mode",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_coordinatorPubKey",
        type: "tuple",
      },
      {
        internalType: "address[]",
        name: "_relayers",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "_eventId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_signer1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_signer2",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_voiceCreditsBalance",
        type: "uint256",
      },
    ],
    name: "createPollWithZupass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startDate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endDate",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "tallyProcessingStateTreeDepth",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "voteOptionTreeDepth",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "stateTreeDepth",
                type: "uint8",
              },
            ],
            internalType: "struct Params.TreeDepths",
            name: "treeDepths",
            type: "tuple",
          },
          {
            internalType: "uint8",
            name: "messageBatchSize",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct DomainObjs.PublicKey",
            name: "coordinatorPublicKey",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "verifier",
            type: "address",
          },
          {
            internalType: "address",
            name: "verifyingKeysRegistry",
            type: "address",
          },
          {
            internalType: "enum DomainObjs.Mode",
            name: "mode",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "policy",
            type: "address",
          },
          {
            internalType: "address",
            name: "initialVoiceCreditProxy",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "relayers",
            type: "address[]",
          },
          {
            internalType: "uint256",
            name: "voteOptions",
            type: "uint256",
          },
        ],
        internalType: "struct IMACI.DeployPollArgs",
        name: "args",
        type: "tuple",
      },
    ],
    name: "deployPoll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poll",
            type: "address",
          },
          {
            internalType: "address",
            name: "messageProcessor",
            type: "address",
          },
          {
            internalType: "address",
            name: "tally",
            type: "address",
          },
        ],
        internalType: "struct IMACI.PollContracts",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "easCheckerFactory",
    outputs: [
      {
        internalType: "contract IEASCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "easPolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "emptyBallotRoots",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20CheckerFactory",
    outputs: [
      {
        internalType: "contract IERC20CheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20PolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20VotesCheckerFactory",
    outputs: [
      {
        internalType: "contract IERC20VotesCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "erc20VotesPolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pollId",
        type: "uint256",
      },
    ],
    name: "fetchPoll",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "string[]",
            name: "options",
            type: "string[]",
          },
          {
            internalType: "bytes[]",
            name: "optionInfo",
            type: "bytes[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "x",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "y",
                type: "uint256",
              },
            ],
            internalType: "struct DomainObjs.PublicKey",
            name: "coordinatorPubKey",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "pollDeployer",
            type: "address",
          },
          {
            internalType: "enum DomainObjs.Mode",
            name: "mode",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "policy",
            type: "address",
          },
        ],
        internalType: "struct Privote.PollData",
        name: "poll_",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freeForAllCheckerFactory",
    outputs: [
      {
        internalType: "contract IFreeForAllCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "freeForAllPolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pollId",
        type: "uint256",
      },
    ],
    name: "getPoll",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "poll",
            type: "address",
          },
          {
            internalType: "address",
            name: "messageProcessor",
            type: "address",
          },
          {
            internalType: "address",
            name: "tally",
            type: "address",
          },
        ],
        internalType: "struct IMACI.PollContracts",
        name: "pollContracts",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pollId",
        type: "uint256",
      },
    ],
    name: "getPollResult",
    outputs: [
      {
        internalType: "uint256[]",
        name: "results",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_publicKeyHash",
        type: "uint256",
      },
    ],
    name: "getStateIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getStateRootOnIndexedSignUp",
    outputs: [
      {
        internalType: "uint256",
        name: "stateRoot",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStateTreeRoot",
    outputs: [
      {
        internalType: "uint256",
        name: "root",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gitcoinCheckerFactory",
    outputs: [
      {
        internalType: "contract IGitcoinPassportCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gitcoinPolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "array",
        type: "uint256[2]",
      },
    ],
    name: "hash2",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[3]",
        name: "array",
        type: "uint256[3]",
      },
    ],
    name: "hash3",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[4]",
        name: "array",
        type: "uint256[4]",
      },
    ],
    name: "hash4",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "array",
        type: "uint256[5]",
      },
    ],
    name: "hash5",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "hatsCheckerFactory",
    outputs: [
      {
        internalType: "contract IHatsCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hatsPolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "leanIMTData",
    outputs: [
      {
        internalType: "uint256",
        name: "size",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depth",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSignups",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleCheckerFactory",
    outputs: [
      {
        internalType: "contract IMerkleProofCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merklePolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messageBatchSize",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "messageProcessorFactory",
    outputs: [
      {
        internalType: "contract IMessageProcessorFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextPollId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pollFactory",
    outputs: [
      {
        internalType: "contract IPollFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "polls",
    outputs: [
      {
        internalType: "address",
        name: "poll",
        type: "address",
      },
      {
        internalType: "address",
        name: "messageProcessor",
        type: "address",
      },
      {
        internalType: "address",
        name: "tally",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "semaphoreCheckerFactory",
    outputs: [
      {
        internalType: "contract ISemaphoreCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "semaphorePolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setAnonAadhaarFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "tallyProcessingStateTreeDepth",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "voteOptionTreeDepth",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "stateTreeDepth",
            type: "uint8",
          },
        ],
        internalType: "struct Params.TreeDepths",
        name: "_treeDepths",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_verifier",
        type: "address",
      },
      {
        internalType: "address",
        name: "_vkRegistry",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "_messageBatchSize",
        type: "uint8",
      },
    ],
    name: "setConfig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newFactory",
        type: "address",
      },
    ],
    name: "setConstantVoiceCreditProxyFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setEASFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setERC20Factories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setERC20VotesFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setFreeForAllFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setGitcoinFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setHatsFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setMerkleFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setSemaphoreFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setTokenFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newCheckerFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_newPolicyFactory",
        type: "address",
      },
    ],
    name: "setZupassFactories",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "sha256Hash",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "x",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "y",
            type: "uint256",
          },
        ],
        internalType: "struct DomainObjs.PublicKey",
        name: "_publicKey",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_signUpPolicyData",
        type: "bytes",
      },
    ],
    name: "signUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "signUpPolicy",
    outputs: [
      {
        internalType: "contract IBasePolicy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stateRootsOnSignUp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stateTreeDepth",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tallyFactory",
    outputs: [
      {
        internalType: "contract ITallyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenCheckerFactory",
    outputs: [
      {
        internalType: "contract ITokenCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSignups",
    outputs: [
      {
        internalType: "uint256",
        name: "signUps",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "treeDepths",
    outputs: [
      {
        internalType: "uint8",
        name: "tallyProcessingStateTreeDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "voteOptionTreeDepth",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "stateTreeDepth",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "userTotalPolls",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vkRegistry",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zupassCheckerFactory",
    outputs: [
      {
        internalType: "contract IZupassCheckerFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zupassPolicyFactory",
    outputs: [
      {
        internalType: "contract IPolicyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;
