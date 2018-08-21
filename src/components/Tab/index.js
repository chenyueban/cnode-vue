import { ButtonGroup, Button } from 'iview';

const TabList = [
  { label: '全部', value: 'all' },
  { label: '精华', value: 'good' },
  { label: '分享', value: 'share' },
  { label: '问答', value: 'ask' },
  { label: '招聘', value: 'job' },
  { label: '客户端测试', value: 'dev' },
];

export default {
  props: {
    page: {
      type: Number,
      required: true,
    },
    tab: {
      type: String,
      required: true,
    },
  },
  components: {
    ButtonGroup,
    Button,
  },
  methods: {
    handleChange(tab) {
      this.$emit('changetab', this.page, tab);
    },
  },
  render(h) {
    return h(
      'ButtonGroup',
      {
        props: {
          size: 'default',
          shape: 'circle',
        },
      },
      TabList.map(tab => h(
        'Button',
        {
          props: {
            size: 'default',
            type: this.tab === tab.value ? 'primary' : 'default',
          },
          on: {
            click: () => {
              this.handleChange(tab.value);
            },
          },
        },
        tab.label,
      )),
    );
  },
};
