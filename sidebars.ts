import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a "Next" and "Previous" navigation
 - create a generated index page for docs in the same category
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    // {
    //   type: 'category',
    //   label: '🚀 Getting Started',
    //   items: [
    //     'getting-started/overview',
    //     'getting-started/self-assessment',
    //     'getting-started/quick-wins',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '📊 Assessment Tools',
    //   items: [
    //     'assessments/joel-test-2025',
    //     'assessments/ai-maturity',
    //     'assessments/team-health-check',
    //   ],
    // },
    {
      type: 'category',
      label: '⭐ Best Practices',
      items: [
        'best-practices/git-workflow',
        // 'best-practices/ci-cd-practices',
        // 'best-practices/code-review',
        // 'best-practices/ai-tools-usage',
        // 'best-practices/testing-strategy',
        // 'best-practices/documentation',
      ],
    },
    // {
    //   type: 'category',
    //   label: '🔧 Problem Solving',
    //   items: [
    //     'problem-solving/common-issues',
    //     'problem-solving/troubleshooting',
    //     'problem-solving/escalation',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '📋 Implementation Guides',
    //   items: [
    //     'implementation/step-by-step',
    //     'implementation/checklists',
    //     'implementation/templates',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: '🔄 Continuous Improvement',
    //   items: [
    //     'continuous-improvement/feedback-loops',
    //     'continuous-improvement/metrics',
    //     'continuous-improvement/retrospectives',
    //   ],
    // },
    {
      type: 'category',
      label: '🐱‍🐉Docusaurus Tutorials',
      items: [
         'tutorial-basics/congratulations',
         'tutorial-basics/create-a-blog-post',
         'tutorial-basics/create-a-document',
         'tutorial-basics/create-a-page',
         'tutorial-basics/deploy-your-site',
         'tutorial-basics/markdown-features',
         'tutorial-extras/manage-docs-versions',
         'tutorial-extras/translate-your-site',
      ]
    },
  ],
};

export default sidebars;