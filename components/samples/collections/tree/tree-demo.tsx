'use client'

import { Tree, TreeItem, TreeItemLabel } from '@/components/ui/tree'

export default function TreeDemo() {
  return (
    <Tree aria-label='Company workspace'>
      <TreeItem id='departments' textValue='Departments'>
        <TreeItemLabel>Departments</TreeItemLabel>
        <TreeItem id='sales' textValue='Sales'>
          <TreeItemLabel>Sales</TreeItemLabel>
          <TreeItem id='reports' textValue='Reports'>
            <TreeItemLabel>Reports</TreeItemLabel>
            <TreeItem id='q1' textValue='Q1.pdf'>
              <TreeItemLabel>Q1.pdf</TreeItemLabel>
            </TreeItem>
            <TreeItem id='q2' textValue='Q2.pdf'>
              <TreeItemLabel>Q2.pdf</TreeItemLabel>
            </TreeItem>
            <TreeItem id='q3' textValue='Q3.pdf'>
              <TreeItemLabel>Q3.pdf</TreeItemLabel>
            </TreeItem>
          </TreeItem>
          <TreeItem id='contacts' textValue='Client Contacts'>
            <TreeItemLabel>Client Contacts</TreeItemLabel>
            <TreeItem id='europe' textValue='Europe.xlsx'>
              <TreeItemLabel>Europe.xlsx</TreeItemLabel>
            </TreeItem>
            <TreeItem id='asia' textValue='Asia.xlsx'>
              <TreeItemLabel>Asia.xlsx</TreeItemLabel>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem id='hr' textValue='HR'>
          <TreeItemLabel>HR</TreeItemLabel>
          <TreeItem id='hr-docs' textValue='Documents'>
            <TreeItemLabel>Documents</TreeItemLabel>
            <TreeItem id='leave' textValue='Leave Policy.pdf'>
              <TreeItemLabel>Leave policy.pdf</TreeItemLabel>
            </TreeItem>
            <TreeItem id='benefits' textValue='Benefits.pdf'>
              <TreeItemLabel>Benefits.pdf</TreeItemLabel>
            </TreeItem>
            <TreeItem id='handbook' textValue='Employee Handbook.pdf'>
              <TreeItemLabel>Employee handbook.pdf</TreeItemLabel>
            </TreeItem>
            <TreeItem id='review' textValue='Performance Review.xlsx'>
              <TreeItemLabel>Performance review.xlsx</TreeItemLabel>
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>

      <TreeItem id='projects' textValue='Projects'>
        <TreeItemLabel>Projects</TreeItemLabel>
        <TreeItem id='revamp' textValue='Website revamp'>
          <TreeItemLabel>Website revamp</TreeItemLabel>
          <TreeItem id='wireframes' textValue='Wireframes'>
            <TreeItemLabel>Wireframes</TreeItemLabel>
            <TreeItem id='home' textValue='Home.fig'>
              <TreeItemLabel>Home.fig</TreeItemLabel>
            </TreeItem>
            <TreeItem id='pricing' textValue='Pricing.fig'>
              <TreeItemLabel>Pricing.fig</TreeItemLabel>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem id='mobileapp' textValue='Mobile app'>
          <TreeItemLabel>Mobile app</TreeItemLabel>
        </TreeItem>
      </TreeItem>

      <TreeItem id='clients' textValue='Clients'>
        <TreeItemLabel>Clients</TreeItemLabel>
        <TreeItem id='acme' textValue='Acme Corp'>
          <TreeItemLabel>Acme corp</TreeItemLabel>
          <TreeItem id='contracts' textValue='Contracts'>
            <TreeItemLabel>Contracts</TreeItemLabel>
            <TreeItem id='2024' textValue='2024.pdf'>
              <TreeItemLabel>2024.pdf</TreeItemLabel>
            </TreeItem>
            <TreeItem id='2025' textValue='2025.pdf'>
              <TreeItemLabel>2025.pdf</TreeItemLabel>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem id='globex' textValue='Globex Ltd'>
          <TreeItemLabel>Globex Ltd</TreeItemLabel>
          <TreeItem id='mou' textValue='MOU'>
            <TreeItemLabel>MOU</TreeItemLabel>
            <TreeItem id='signed' textValue='Signed.pdf'>
              <TreeItemLabel>Signed.pdf</TreeItemLabel>
            </TreeItem>
          </TreeItem>
        </TreeItem>
        <TreeItem id='initech' textValue='Initech'>
          <TreeItemLabel>Initech</TreeItemLabel>
          <TreeItem id='invoices' textValue='Invoices'>
            <TreeItemLabel>Invoices</TreeItemLabel>
            <TreeItem id='inv1' textValue='INV-001.pdf'>
              <TreeItemLabel>INV-001.pdf</TreeItemLabel>
            </TreeItem>
            <TreeItem id='inv2' textValue='INV-002.pdf'>
              <TreeItemLabel>INV-002.pdf</TreeItemLabel>
            </TreeItem>
            <TreeItem id='inv3' textValue='INV-003.pdf'>
              <TreeItemLabel>INV-003.pdf</TreeItemLabel>
            </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>

      <TreeItem id='legal' textValue='Legal'>
        <TreeItemLabel>Legal</TreeItemLabel>
        <TreeItem id='nda' textValue='NDAs'>
          <TreeItemLabel>NDAs</TreeItemLabel>
        </TreeItem>
        <TreeItem id='terms' textValue='Terms'>
          <TreeItemLabel>Terms</TreeItemLabel>
          <TreeItem id='current' textValue='2025.pdf'>
            <TreeItemLabel>2025.pdf</TreeItemLabel>
          </TreeItem>
          <TreeItem id='previous' textValue='2024.pdf'>
            <TreeItemLabel>2024.pdf</TreeItemLabel>
          </TreeItem>
        </TreeItem>
      </TreeItem>

      <TreeItem id='resources' textValue='Resources'>
        <TreeItemLabel>Resources</TreeItemLabel>
        <TreeItem id='docs' textValue='Documentation'>
          <TreeItemLabel>Documentation</TreeItemLabel>
          <TreeItem id='api' textValue='API.md'>
            <TreeItemLabel>API.md</TreeItemLabel>
          </TreeItem>
          <TreeItem id='sdk' textValue='SDK.md'>
            <TreeItemLabel>SDK.md</TreeItemLabel>
          </TreeItem>
          <TreeItem id='auth' textValue='Auth.md'>
            <TreeItemLabel>Auth.md</TreeItemLabel>
          </TreeItem>
        </TreeItem>
        <TreeItem id='videos' textValue='Video Tutorials'>
          <TreeItemLabel>Video tutorials</TreeItemLabel>
          <TreeItem id='intro' textValue='Intro.mp4'>
            <TreeItemLabel>Intro.mp4</TreeItemLabel>
          </TreeItem>
          <TreeItem id='setup' textValue='Setup.mp4'>
            <TreeItemLabel>Setup.mp4</TreeItemLabel>
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </Tree>
  )
}
