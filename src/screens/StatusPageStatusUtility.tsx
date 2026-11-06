// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <header className="w-full bg-white border-b border-slate-200 py-4 px-8 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-sm tracking-wide">
              SU
            </div>
            <div>
              <div className="text-base font-semibold text-slate-900 leading-tight">Status Utility</div>
              <div className="text-xs text-slate-500">Service Health &amp; Runtime Monitor</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            <span>Operational</span>
          </div>
        </header>
      
        <main className="flex-1 max-w-4xl w-full mx-auto p-8 flex flex-col justify-center">
          <div data-surface-id="SURF_STATUS_PAGE" className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 space-y-8" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_STATUS_PERSISTENCE_OBSERVABLE OBS_REFRESH_STATUS_STATUS_ROUTE_OBSERVABLE OBS_REFRESH_STATUS_STATUS_TEXT_OBSERVABLE">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">System Status Overview</h1>
                <p className="text-sm text-slate-500 mt-1">Current state monitoring for local and upstream runtime services.</p>
              </div>
              <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="inline-flex items-center justify-center px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_CONTROL_OBSERVABLE" data-action-id="refresh-1" onClick={actions?.["refresh-1"]}>
                Refresh
              </button>
            </div>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Current Status Message</div>
                  <div className="text-xl font-semibold text-slate-800">Status refreshed</div>
                </div>
                <div className="mt-4 flex items-center text-xs text-emerald-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-2"></span>
                  Synchronized with storage
                </div>
              </div>
      
              <div className="p-6 bg-slate-50 rounded-lg border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Status Value</div>
                  <div className="inline-flex items-center px-3 py-1 rounded bg-emerald-100 text-emerald-800 font-mono text-base font-semibold">
                    refreshed
                  </div>
                </div>
                <div className="mt-4 text-xs text-slate-400">
                  Key: status | Persistent value
                </div>
              </div>
            </div>
      
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-500">
              <div className="bg-slate-50/50 p-3 rounded border border-slate-100">
                <span className="block text-slate-400 font-medium mb-1">Route Endpoint</span>
                <span className="font-mono text-slate-700 font-medium">/status</span>
              </div>
              <div className="bg-slate-50/50 p-3 rounded border border-slate-100">
                <span className="block text-slate-400 font-medium mb-1">Target Environment</span>
                <span className="text-slate-700 font-medium">Production Node</span>
              </div>
              <div className="bg-slate-50/50 p-3 rounded border border-slate-100">
                <span className="block text-slate-400 font-medium mb-1">Storage Engine</span>
                <span className="text-slate-700 font-medium">Local Storage Sync</span>
              </div>
            </div>
          </div>
        </main>
      
        <footer className="w-full border-t border-slate-200 py-4 px-8 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>Status Utility — Operational Runtime</div>
          <div>All systems nominal</div>
        </footer>
    </>
  );
}
