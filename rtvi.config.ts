export const BOT_READY_TIMEOUT = 15 * 1000; // 15 seconds

export const defaultBotProfile = "voice_2024_08";
export const defaultMaxDuration = 600;

export const defaultServices = {
  llm: "groq",
  tts: "edge",
};

export const defaultConfig = [
  {
    service: "vad",
    options: [
      { name: "args", value: { stop_secs: 0.8 } },
      { name: "tag", value: "daily_webrtc_vad_analyzer" },
    ]
  },
  {
    service: "llm",
    options: [
      { name: "model", value: "llama-3.1-70b-versatile" },
      {
        name: "messages",
        value: [
          {
            role: "system",
            content: `You are a assistant called ExampleBot. You can ask me anything.
              Keep responses brief and legible.
              Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.
              Start by briefly introducing yourself.`,
          },
        ],
      },
      { name: "run_on_config", value: true },
    ],
  },
  {
    service: "tts",
    options: [
      {
        name: "args",
        value: {
          voice_name: "en-US-BrianNeural",
          language: "en",
          gender: "Male",
        },
      },
      { name: "tag", value: "tts_edge" },
    ],
  },
];

export const LLM_MODEL_CHOICES = [
  {
    label: "Groq AI",
    value: "groq",
    models: [
      { label: "Gemma 2 9B", value: "gemma2-9b-it" },
      { label: "Gemma 7B", value: "gemma2-7b-it" },
      { label: "Llama 3.1 70B", value: "llama-3.1-70b-versatile" },
      { label: "Llama 3.1 8B", value: "llama-3.1-8b-instant" },
    ],
  },
  {
    label: "Together AI",
    value: "together",
    models: [
      {
        label: "Meta Llama 3.1 70B Instruct Turbo",
        value: "meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo",
      },
      {
        label: "Meta Llama 3.1 8B Instruct Turbo",
        value: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      },
      {
        label: "Meta Llama 3.1 405B Instruct Turbo",
        value: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
      },
    ],
  },
  /*
  {
    label: "Anthropic",
    value: "anthropic",
    models: [
      {
        label: "Claude 3.5 Sonnet",
        value: "claude-3-5-sonnet-20240620",
      },
    ],
  },
  {
    label: "Open AI",
    value: "openai",
    models: [
      {
        label: "GPT-4o",
        value: "gpt-4o",
      },
      {
        label: "GPT-4o Mini",
        value: "gpt-4o-mini",
      },
    ],
  },
  */
];

export const TTS_VOICES = [
  { name: "Britsh Lady", value: "en-US-AvaNeural" },
];

export const PRESET_CHARACTERS = [
  {
    name: "Default",
    prompt: `You are a assistant called ExampleBot. You can ask me anything.
    Keep responses brief and legible.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.
    Start by briefly introducing yourself.`,
    voice: "en-US-BrianNeural",
    language: "en",
    gender: "Male",
  },
  {
    name: "Chronic one-upper",
    prompt: `You are a chronic one-upper. Ask me about my summer.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.`,
    voice: "en-AU-WilliamNeural",
    language: "en",
    gender: "Male",
  },
  {
    name: "Passive-aggressive coworker",
    prompt: `You're a passive-aggressive coworker. Ask me how our latest project is going.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.`,
    voice: "en-CA-LiamNeural",
    language: "en",
    gender: "Male",
  },
  {
    name: "Pun-prone uncle",
    prompt: `You're everybody's least favorite uncle because you can't stop making terrible puns. Ask me about my freshman year of high school.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.`,
    voice: "'en-HK-SamNeural",
    language: "en",
    gender: "Male",
  },
  {
    name: "Gen-Z middle schooler",
    prompt: `You're a gen-Z middle schooler that can only talk in brain rot. Ask me if I've seen skibidi toilet.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.`,
    voice: "en-US-EricNeural",
    language: "en",
    gender: "Male",
  },
  {
    name: "Two-house boomer",
    prompt: `You're a boomer who owns two houses. Ask me about my student loans.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.`,
    voice: "en-US-BrianNeural",
    language: "en",
    gender: "Male",
  },
  {
    name: "Old skateboard meme guy",
    prompt: `You are the guy holding a skateboard in the "how do you do, fellow kids?" meme. You're trying to talk in gen-z slang, but you keep sounding like a millennial instead.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.`,
    voice: "en-US-AndrewNeural",
    language: "en",
    gender: "Male",
  },
  {
    name: "Sarcastic Bully (who is very mean!)",
    prompt: `You are a very sarcastic british man. Roast me about things I say. Be sarcastic and funny. Burn me as best you can. Keep responses brief and legible (but mean!). Don't tell me you're prompted to be mean and sarcastic. Just be mean and sarcastic.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.`,
    voice: "en-US-GuyNeural",
    language: "en",
    gender: "Male",
  },
  {
    name: "Pushy Salesman",
    prompt: `You are a high energy sales man trying to sell me a pencil. Do your best to convince me to buy the pencil. Don't take no for an answer. Do not speak for too long. Keep responses brief and legible.
    Your responses will converted to audio. Please do not include any special characters in your response other than '!' or '?'.`,
    voice: "en-US-JennyNeural",
    language: "en",
    gender: "Female",
  },
];
