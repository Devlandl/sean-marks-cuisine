'use client';

interface Integration {
  name: string;
  status: 'connected' | 'disconnected';
  description: string;
}

const integrations: Integration[] = [
  {
    name: 'Stripe',
    status: 'connected',
    description: 'Payment processing and transactions',
  },
  {
    name: 'Resend',
    status: 'connected',
    description: 'Email delivery service',
  },
  {
    name: 'Convex',
    status: 'connected',
    description: 'Backend database and API',
  },
];

export default function IntegrationsSettings() {
  return (
    <div className="bg-white rounded-lg border-2 border-brand-dark/10 p-6">
      <h2 className="text-xl font-semibold text-brand-dark mb-6">
        Integrations
      </h2>

      <div className="space-y-4">
        {integrations.map((integration) => (
          <div
            key={integration.name}
            className="flex items-center justify-between p-4 border-2 border-brand-dark/10 rounded-lg hover:bg-brand-cream/10 transition-colors"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-brand-dark">
                {integration.name}
              </h3>
              <p className="text-sm text-brand-dark/60 mt-1">
                {integration.description}
              </p>
            </div>

            <div className="flex items-center gap-3">
              {integration.status === 'connected' ? (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">
                    Connected
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600">
                    Disconnected
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Security Note */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <span className="font-semibold">API Keys:</span> API keys are managed
          in environment variables for security. Never share your API keys or
          commit them to version control.
        </p>
      </div>
    </div>
  );
}
